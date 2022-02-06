import React, { useContext } from 'react';
import CartIcon from './../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartButton.module.css'


function HeaderCartButton({ onCartClick }) {

    const cartCtx = useContext(CartContext)
    const numerOfCartItem = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    return (

        <button className={styles.button} onClick={onCartClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>
                your cart
            </span>
            <span className={styles.badge}>
                {numerOfCartItem}
            </span>

        </button >

    );
}

export default HeaderCartButton;