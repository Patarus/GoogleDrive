import React from 'react';
import styles from './Home.module.scss';
import NavBar from '../NavBar/NavBar';
import SideMenu from '../SideMenu/SideMenu';


const Home = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <SideMenu />
            
        </div>
    );
}

export default Home;
