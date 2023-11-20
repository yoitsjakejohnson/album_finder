import styles from './SearchForm.module.css'
import { useState } from 'react'
import PropTypes from 'prop-types';

function SearchForm({ onSearch = () => { } }) {
    const [searchInput, setSearchInput] = useState('')


    const handleSearchClick = () => {
        onSearch(searchInput);
    };

    return (

        <div className={styles.searchbox}>
            <input type="search" name="search" id="search" placeholder='Enter artist name'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)
                } />
            <button type='submit' onClick={handleSearchClick} className={`btn ${styles.searchbtn}`}>find albums</button>
        </div>

    )
}

SearchForm.propTypes = {
    onSearch: PropTypes.func,
};

export default SearchForm