import {Field, Form, Formik} from 'formik';

import {FilterType} from '../../../redux/reducers/usersReducer';

type UsersSearchFormObjectType = {
    term: string
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = (props) => {
    const {onFilterChanged} = props

    const submit = (
        values: FilterType,
        {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        console.log('Formik', values)
        onFilterChanged(values)
    }

    return (
        <div>
            <Formik initialValues={{term: ''}}
                    onSubmit={submit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field type="text" name="term"/>
                        <button type='submit'>
                            Search
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

// ===============================

// import {Field, Form, Formik} from 'formik';
//
// import {FilterType} from '../../../redux/reducers/usersReducer';
//
// type FormType = {
//     term: string
//     friend: 'true' | 'false' | 'null'
// }
//
// type PropsType = {
//     onFilterChanged: (filter: FilterType) => void
// }
//
// export const UsersSearchForm: React.FC<PropsType> = (props) => {
//     const {onFilterChanged} = props
//
//     const submit = (
//         values: FormType,
//         {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }
//     ) => {
//         debugger
//         const filter: FilterType = {
//             term: values.term,
//             friend: values.friend === 'null' ? null : values.friend === 'true'
//         }
//
//         onFilterChanged(filter)
//     }
//
//     return (
//         <div>
//             <Formik initialValues={{term: '', friend: 'null'}}
//                     onSubmit={submit}
//             >
//                 {({isSubmitting}) => (
//                     <Form>
//                         <Field type="text" name="term"/>
//                         <button type='submit'>
//                             Search
//                         </button>
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     );
// };

