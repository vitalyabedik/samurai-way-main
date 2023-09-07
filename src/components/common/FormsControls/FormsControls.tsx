import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import {Field, WrappedFieldMetaProps} from 'redux-form';

import styles from './FormsControls.module.css'

import {FieldValidatorType} from '../../../utils/validators';

type DefaultInputPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
type FormsControlType = {
    input: DefaultInputPropsType
    meta: WrappedFieldMetaProps
    FormType: string
}

export const FormsControls: React.FC<FormsControlType> = ({
                                                              input,
                                                              meta,
                                                              FormType,
                                                              ...props
                                                          }) => {
    const error = meta.touched && meta.error
    const finalInputName = `${styles.formControl} ${error ? styles.error : ''}`

    return (
        <div className={finalInputName}>
            <FormType {...input} {...props}/>
            {error && <div className={styles.errorMessage}>{meta.error}</div>}
        </div>
    )
}

export const Textarea: React.FC<FormsControlType> = ({...props}) => {
    return <FormsControls {...props} FormType="textarea"/>
}

export const Input: React.FC<FormsControlType> = ({...props}) => {
    return <FormsControls {...props} FormType="input"/>
}

export function createField<FormKeyType extends string>(
    placeholder: string | undefined,
    name: FormKeyType,
    validators: Array<FieldValidatorType>,
    component: React.FC<FormsControlType>,
    props?: {
        className?: string,
        type?: string
    },
    text = '',
) {
    return (
        <div className={styles.createFieldRoot}>
            <Field
                placeholder={placeholder}
                name={name}
                validate={validators}
                component={component}
                className={props?.className}
                {...props}
            />{' '}
            <label className={styles.createFieldText}> {text} </label>
        </div>
    );
}

export type GetStringKeys<T> = Extract<keyof T, string>;