import React from 'react';
import GoogleDriveText from '../GoogleDriveText/GoogleDriveText';
import SearchBar from '../SearchBar/SearchBar';
import GoogleDriveLogo from '../SvgComponents/GoogleDriveLogo';
import Icone1 from '../SvgComponents/Icone1';
import Icone2 from '../SvgComponents/Icone2';
import Icone3 from '../SvgComponents/Icone3';
import UserBadge from '../UserBadge/UserBadge';
import MenuBurger from '../MenuBurger/MenuBurger'; // importez votre MenuBurger ici
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <div className={styles.container}>
    <div className={styles.topBar}>
        <div className={styles.logoContainer}>
            <GoogleDriveLogo className={styles.googleDriveLogo} />
            <GoogleDriveText />
        </div>
        
        <SearchBar />

        <div className={styles.iconContainer}>
            <Icone1 className={styles.iconStyle} />
            <Icone2 className={styles.iconStyle} />
            <Icone3 className={styles.iconStyle} />
        </div>

        <div className={styles.userBadgeContainer}>
            <UserBadge username="Sebastien" />
        </div>

        <MenuBurger />
    </div>
</div>

    );
}

export default NavBar;
