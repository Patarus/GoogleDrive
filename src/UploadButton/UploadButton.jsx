import React from 'react';
import styles from './UploadButton.module.scss';

const UploadButton = ({ onClick }) => {
    return (
        <button className={styles.uploadButton} onClick={onClick}>
            Upload New File
        </button>
    );
}

export default UploadButton;
