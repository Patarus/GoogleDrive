import React from 'react';
import UploadButton from '../UploadButton/UploadButton'; 
import styles from './SideMenu.module.scss';
import IconeCompass from '../SvgComponents/IconeCompass';
import MenuItem from '../MenuItem/MenuItem';

const SideMenu = () => {
    const handleUpload = () => {
        console.log('Upload button clicked!');
    };

    return (
        <div className={styles.container}>
            <UploadButton onClick={handleUpload} />
            <MenuItem IconComponent={IconeCompass} text="Mon Texte Ici" />
            {/* Ajoutez plus de MenuItem ici si nécessaire */}
        </div>
    );
    
}

export default SideMenu;
