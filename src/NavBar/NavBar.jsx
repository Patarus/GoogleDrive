import SearchBar from '../SearchBar/SearchBar';
import GoogleDriveLogo from '../SvgComponents/GoogleDriveLogo';
import UserBadge from '../UserBadge/UserBadge';
import styles from './NavBar.module.scss';



const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <div className={styles.logoContainer}>
                <GoogleDriveLogo className={styles.googleDriveLogo} /><span>Google Drive</span>

                </div>
                <SearchBar />
                <UserBadge username="Sebastien" />

                
            </div>
            
        </div>
    );

}

export default NavBar
