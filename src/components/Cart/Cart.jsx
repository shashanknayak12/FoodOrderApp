import React from 'react';
import styles from './Cart.module.css'
import Modal from './../UI/Modal';

function Cart({ onCloseCart }) {
    const cartItems = [{}]
    return (
        <Modal onCloseCart={onCloseCart}>
            {/* {cartItems} */}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35.55</span>
            </div>
            <div className={styles.actions}>
                <button onClick={onCloseCart} className={styles['button--alt']}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;