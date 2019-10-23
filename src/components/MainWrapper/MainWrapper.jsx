import React from 'react';
import SearchInput from '../SearchBox/SearchBox';
import styles from './MainWrapperStyles.module.scss';

const MainWrapper = () => {
  return (
    <div className={styles.MainWrapper}>
      <div className={styles.SeachBlock}>
        <h3>Where are you going?</h3>
        <label>Pick-up Location</label>
        <SearchInput />
      </div>
    </div>
  )
};

export default MainWrapper;