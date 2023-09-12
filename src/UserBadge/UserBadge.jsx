import React from 'react';
import styles from './UserBadge.module.scss';

const UserBadge = ({ username, imageSrc }) => {
    return (
        <div className={styles.badge}>
            {imageSrc ? <img src={imageSrc} alt={username} /> : <span>{username.charAt(0).toUpperCase()}</span>}
        </div>
    );
}

export default UserBadge;
