import React from 'react';
import styles from './MenuItem.module.scss';
import IconeCompass from '../SvgComponents/IconeCompass';


const MenuItem = ({ IconComponent, text }) => {
    return (
        <div className={styles.itemContainer}>
            <IconComponent className={styles.iconStyle} />
            <span className={styles.textStyle}>{text}</span>
        </div>
    );
}


export default MenuItem;
