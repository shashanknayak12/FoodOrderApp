import React, { useState, useContext } from 'react';
import styles from './Cart.module.css'
import Modal from './../UI/Modal';
import CartContext from './../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

function Cart({ onCloseCart }) {
    const [isCheckOut, setIsCheckout] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)
    const [userName, setUserName] = useState()

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



    const submitOrderHandler = async (userdata) => {
        setIsSubmitting(true)
        await fetch("https://react-http-1ce8c-default-rtdb.firebaseio.com/orders.json", {
            method: 'POST',
            body: JSON.stringify({
                user: userdata,
                orderedItems: cartCtx.items
            }),
        })
        setUserName(userdata.name)
        setIsSubmitting(false)
        setDidSubmit(true)
        cartCtx.clearCart()
    }


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




    const cartModalContent =
        <React.Fragment>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>

            {isCheckOut && <Checkout onSubmitUserData={submitOrderHandler} onCancel={onCloseCart} />}

            {!isCheckOut && modalAction}
        </React.Fragment>


    const isSubmitingModalContent = <p>Sending your order data...</p>

    const didSubmitModalContent =
        <React.Fragment>
            <p className={styles.success}>
                Hi <span>{userName}</span>, thanks for placing a order with SN Restro! Your order should be home with you in around 30-45 minutes
            </p>

            <div className={styles.actions}>
                <button onClick={onCloseCart} className={styles['button--alt']}>Close</button>
            </div>

        </React.Fragment>



    return (
        <Modal onCloseCart={onCloseCart}>

            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmitingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}

        </Modal>
    );
}

export default Cart;