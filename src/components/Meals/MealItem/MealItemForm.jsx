import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css'

function MealItemForm(props) {

    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef()


    const sumbitHandler = (e) => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount
        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false)
            return
        }

        props.onAddToCart(enteredAmountNumber)



    }

    return (
        <form className={styles.form} onSubmit={sumbitHandler}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '10',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button className={styles.button}>Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    );
}

export default MealItemForm;