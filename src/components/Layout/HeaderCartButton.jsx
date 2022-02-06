import React from 'react';
import CartIcon from './../Cart/CartIcon';
import styles from './HeaderCartButton.module.css'


function HeaderCartButton({ onCartClick }) {


    return (

        <button className={styles.button} onClick={onCartClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>
                your cart
            </span>
            <span className={styles.badge}>
                5
            </span>

        </button >

    );
}

export default HeaderCartButton;