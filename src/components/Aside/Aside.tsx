import styles from './Aside.module.css';

import {Contacts} from './Contacts';
import {Navbar} from './Navbar';
import {StoreContext} from '../../StoreContext';

export const Aside = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()

                    return (
                        <aside className={styles.root}>
                            <div className={styles.wrapper}>
                                <div className={styles.navbar}>
                                    <Navbar/>
                                </div>
                                <div className={styles.contacts}>
                                    <Contacts contacts={state.aside.contacts}/>
                                </div>
                            </div>
                        </aside>

                    )
                }
            }
        </StoreContext.Consumer>
    )
}