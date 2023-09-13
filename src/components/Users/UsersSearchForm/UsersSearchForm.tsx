import {useState} from 'react';
import {Field, Form, Formik} from 'formik';

import styles from './UsersSearchForm.module.css';

import iconSearch from '../../../assets/images/header/icon-search.svg';
import iconClose from '../../../assets/images/header/icon-search-close.svg'
import {useWindowWidth} from '../../../hooks';

type PropsType = {
    onFilterChanged: (filterSearch: string) => void;
    handleCloseIconClick: (isClose: boolean) => void
};

export const UsersSearchForm: React.FC<PropsType> = (props) => {
    const {onFilterChanged, handleCloseIconClick} = props;

    const isMobile = useWindowWidth(520)

    const [isInputActive, setIsInputActive] = useState(false);

    const handleInputFocus = () => {
        setIsInputActive(true);
    };

    const handleClearInput = () => {
        onFilterChanged('');
        setIsInputActive(false);
        handleCloseIconClick(false)
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
                    placeholder={isMobile ? 'Search...' : 'Search for users and friends...'}
                    onFocus={handleInputFocus}
                />
                {isInputActive && (
                    <div className={styles.clearIcon} onClick={handleClearInput}>
                        <img src={iconClose} alt="icon-close" />
                    </div>
                )}
                <div className={`${styles.buttonContainer} ${!isInputActive ? styles.hidden : ''}`}>
                    <button className={styles.searchButton} type="submit">
                        Search
                    </button>
                </div>
            </Form>
        </Formik>
    );
};