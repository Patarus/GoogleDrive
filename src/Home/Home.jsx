import React from 'react';
import styles from './Home.module.scss';
import NavBar from '../NavBar/NavBar'; 

const Home = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            
        </div>
    );
}

export default Home;
