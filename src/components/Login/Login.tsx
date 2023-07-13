import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls';
import {required} from '../../utils/validators';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="Login"
                       name={'login'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type="Password"
                       name={'password'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type="Checkbox"
                       name={'rememberMe'}
                       component={Input}
                       validate={[required]}
                /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmitHandler = (allFormData: FormDataType) => {
        console.log(allFormData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    );
};


