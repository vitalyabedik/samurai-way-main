import {useState} from 'react';
import {Field, Form, Formik} from 'formik';

import styles from './UsersSearchForm.module.css';

import iconSearch from '../../../assets/images/header/icon-search.svg';

type PropsType = {
    onFilterChanged: (filterSearch: string) => void;
};

export const UsersSearchForm: React.FC<PropsType> = (props) => {
    const {onFilterChanged} = props;

    const [isInputActive, setIsInputActive] = useState(false);

    const handleInputFocus = () => {
        setIsInputActive(true);
    };

    const submit = (values: { term: string }) => {
        onFilterChanged(values.term)
        setIsInputActive(false)
    };

    return (
        <Formik initialValues={{term: ''}} onSubmit={submit}>
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
                />
                <div className={`${styles.buttonContainer} ${!isInputActive ? styles.hidden : ''}`}>
                    <button className={styles.searchButton} type="submit">
                        Search
                    </button>
                </div>
            </Form>
        </Formik>
    );
};