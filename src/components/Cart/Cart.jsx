import React, { useState, useContext } from 'react';
import styles from './Cart.module.css'
import Modal from './../UI/Modal';
import CartContext from './../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

function Cart({ onCloseCart }) {
    const [isCheckOut, setIsCheckout] = useState(false)

    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0


    const cartItemRemovehandler = (id) => {
        cartCtx.removeItem(id)

    }
    const cartItemAddhandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const orderHandler = () => {
        console.log('order btn click')
        setIsCheckout(true)
    }

    const modalAction =
        <div className={styles.actions}>
            <button onClick={onCloseCart} className={styles['button--alt']}>Close</button>

            {
                hasItems && <button
                    onClick={orderHandler}
                    className={styles.button}
                >
                    Order
                </button>
            }

        </div>


    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartCtx.items.map((item) => {
                return (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onRemove={cartItemRemovehandler.bind(null, item.id)}
                        onAdd={cartItemAddhandler.bind(null, item)}
                    />
                )
            })}
        </ul>
    )
    return (
        <Modal onCloseCart={onCloseCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>

            {isCheckOut && <Checkout onCancel={onCloseCart} />}

            {!isCheckOut && modalAction}


        </Modal>
    );
}

export default Cart;