import React, { useContext, useEffect, useState } from 'react';
import CartIcon from './../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartButton.module.css'


function HeaderCartButton({ onCartClick }) {

    const [btnHighlighted, setBtnHighlighted] = useState(false)

    const cartCtx = useContext(CartContext)
    const numerOfCartItem = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const { items } = cartCtx

    const btnClass = `${styles.button} ${btnHighlighted ? styles.bump : ''}`

    useEffect(() => {

        if (items.length === 0) {
            return

        }
        setBtnHighlighted(true)

        const timer = setTimeout(() => {
            setBtnHighlighted(false)
        }, 300)


        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return (

        <button className={btnClass} onClick={onCartClick}>
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