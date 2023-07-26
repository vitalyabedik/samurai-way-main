import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

import styles from './Login.module.css'

import {createField, GetStringKeys, Input} from '../common/FormsControls';
import {required} from '../../utils/validators';
import {loginThunkCreator} from '../../redux/thunks/authThunk';
import {AppStateType} from '../../redux/redux-store';

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginFormValuesTypeKeys = GetStringKeys<FormDataType>;

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({error, handleSubmit}) => {

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
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button className={styles.loginButton}>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginType = {
    login: (formData: FormDataType) => void
    isAuth: boolean
}

export const Login: React.FC<LoginType> = ({isAuth, login}) => {

    const onSubmitHandler = (formData: FormDataType) => {
        login(formData)
    }

    if (isAuth) return <Redirect to={'/profile'}/>

    return (
        <div className={styles.root}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    );
};

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        login: loginThunkCreator
    }),
)(Login)

