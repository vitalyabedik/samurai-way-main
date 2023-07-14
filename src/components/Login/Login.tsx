import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

import styles from './Login.module.css'

import {Input} from '../common/FormsControls';
import {required} from '../../utils/validators';
import {loginThunkCreator} from '../../redux/thunks/authThunk';
import {connect, useDispatch} from 'react-redux';
import {AppStateType, useAppDispatch} from '../../redux/redux-store';
import {compose} from 'redux';
import {setCurrentPageAC, setUsersAC} from '../../redux/actions/usersAction';
import {
    changePageThunkCreator,
    followThunkCreator,
    getUsersThunkCreator,
    unFollowThunkCreator
} from '../../redux/thunks/usersThunk';
import {withAuthRedirectComponent} from '../../hoc/withAuthRedirect';
import {UsersContainerAPI} from '../Users/UsersContainer';
import {Redirect} from 'react-router-dom';
import {FollowingInProgressType, InitialStateType} from '../../redux/reducers/usersReducer';

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({error, handleSubmit}) => {

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div>
                <Field placeholder="Email"
                       type="email"
                       name="email"
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder="Password"
                       type="password"
                       name="password"
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div className={styles.loginCheckbox}>
                <Field type="Checkbox"
                       name={'rememberMe'}
                       component={Input}
                       validate={[required]}
                /> <span className={styles.loginCheckboxText}>remember me</span>
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

export const Login:React.FC<LoginType> = ({isAuth, login}) => {

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

export const LoginContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        login: loginThunkCreator
    }),
)(Login)

