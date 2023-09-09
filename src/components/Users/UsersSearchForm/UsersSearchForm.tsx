import {Field, Form, Formik} from 'formik';

import {FilterType} from '../../../redux/reducers/usersReducer';
import styles from './UsersSearchForm.module.css';
import iconSearch from '../../../assets/images/header/icon-search.svg';
import {useState} from 'react';

type UsersSearchFormObjectType = {
    term: string
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = (props) => {
    const {onFilterChanged} = props

    const [isInputActive, setIsInputActive] = useState(false);

    const handleInputFocus = () => {
        setIsInputActive(true);
    };

    const handleInputBlur = () => {
        setIsInputActive(false);
    };

    const submit = (
        values: FilterType,
        {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        console.log('Formik', values)
        onFilterChanged(values)
    }

    return (
        <Formik initialValues={{term: ''}} onSubmit={submit}>
            {({isSubmitting}) => (
                <Form className={styles.root}>
                    <div className={`${styles.searchIcon} ${isInputActive ? styles.hidden : ''}`}>
                        <img src={iconSearch} alt="icon-search"/>
                    </div>
                    <Field
                        className={`${styles.searchInput} ${isInputActive ? styles.searchInputPadding : ''}`}
                        type="text"
                        name="term"
                        placeholder="Search for users and friends..."
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                    <div className={`${styles.buttonContainer} ${!isInputActive ? styles.hidden : ''}`}>
                        <button className={styles.searchButton} type="submit">
                            Search
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
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

