import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {InjectedFormProps, reduxForm} from 'redux-form';

import styles from './Login.module.css'

import {createField, GetStringKeys, Input} from '../common/FormsControls';
import {required} from '../../utils/validators';
import {loginThunkCreator} from '../../redux/thunks/authThunk';
import {AppStateType} from '../../redux/redux-store';


type LoginFormPropsType = {
    captchaUrl: string | null
}

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormDataType>;
type AllSampleFormProps = LoginFormPropsType & InjectedFormProps<LoginFormDataType, LoginFormPropsType>

export const LoginForm: React.FC<AllSampleFormProps> = (props) => {
    const {
        error,
        captchaUrl,
        handleSubmit
    } = props

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div>
                {createField<LoginFormValuesTypeKeys>('Email', 'email', [required], Input)}
            </div>
            <div>
                {createField<LoginFormValuesTypeKeys>('Password', 'password', [required], Input, {type: 'password',})}
            </div>
            <div className={styles.loginCheckbox}>
                {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me',)}
                {/*<Field type="Checkbox"*/}
                {/*       name={'rememberMe'}*/}
                {/*       component={Input}*/}
                {/*/> <span className={styles.loginCheckboxText}>remember me</span>*/}
            </div>

            {captchaUrl && <img src={captchaUrl} alt="captcha-image"/>}
            {captchaUrl && createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [required], Input)}

            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button className={styles.loginButton}>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<LoginFormDataType, LoginFormPropsType>({form: 'login'})(LoginForm)

type LoginType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
    isAuth: boolean
    captchaUrl: string | null
}

export const Login: React.FC<LoginType> = (props) => {
    const {
        isAuth,
        login,
        captchaUrl
    } = props

    const onSubmitHandler = (formData: LoginFormDataType) => {
        login(formData.email,formData.password,formData.rememberMe,formData.captcha)
    }

    if (isAuth) return <Redirect to={'/profile'}/>

    return (
        <div className={styles.root}>
            <h1>Login</h1>
            <LoginReduxForm
                onSubmit={onSubmitHandler}
                captchaUrl={captchaUrl}
            />
        </div>
    );
};

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        login: loginThunkCreator,
    }),
)(Login)

