import React from 'react';

export const Aside = () => {
    return (
        <aside className="aside">
            <ul className="navigation__items">
                <li className="navigation__item">
                    <a className="navigation__link" href="#">Profile</a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="#">Messages</a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="#">News</a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="#">Music</a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="#">Settings</a>
                </li>
            </ul>
        </aside>
    )
}