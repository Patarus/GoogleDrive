import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
    return (
        <div className={styles.searchContainer}>
            <input type="text" className={styles.searchInput} placeholder="Rechercher dans Drive" />
        </div>
    );
}

export default SearchBar;
