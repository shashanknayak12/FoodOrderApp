import React from 'react';
import mealsImg from '../../assets/meals.jpg'
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>React meals</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImg} alt='food images' />
            </div>

        </React.Fragment>
    );
}

export default Header;