import React from 'react';
import styles from './MenuBurger.module.scss';

const MenuBurger = ({ onClick }) => {
    return (
        <button className={styles.burger} onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
}

export default MenuBurger;
