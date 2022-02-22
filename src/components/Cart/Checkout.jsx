import styles from './Checkout.module.css';
import { useRef, useState } from 'react';

const isEmpty = (value) => value.trim() === '';
const isFiveChar = (value) => value.trim().length === 5;

const Checkout = (props) => {

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })




    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalInputRef = useRef()
    const cityInputRef = useRef()






    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredPostal = postalInputRef.current.value
        const enteredCity = cityInputRef.current.value


        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredCityIsValid = !isEmpty(enteredCity)
        const enteredPostalIsvalid = isFiveChar(enteredPostal)



        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalIsvalid
        })

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsvalid && enteredCityIsValid
        console.log('confirem btn click')
        if (!formIsValid) {
            return
        }



    };

    return (
        <form className={styles.form} onSubmit={confirmHandler}>
            <div className={`${styles.control} ${formInputsValidity.name ? "" : styles.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef} type='text' id='name' />
                {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={`${styles.control} ${formInputsValidity.street ? "" : styles.invalid}`}>
                <label htmlFor='street'>Street</label>
                <input ref={streetInputRef} type='text' id='street' />
                {!formInputsValidity.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={`${styles.control} ${formInputsValidity.postalCode ? "" : styles.invalid}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input ref={postalInputRef} type='text' id='postal' />
                {!formInputsValidity.postalCode && <p>Please enter a valid postal code(5 characters long)!</p>}
            </div>
            <div className={`${styles.control} ${formInputsValidity.city ? "" : styles.invalid}`}>
                <label htmlFor='city'>City</label>
                <input ref={cityInputRef} type='text' id='city' />
                {!formInputsValidity.city && <p>Please enter a valid city!</p>}
            </div>
            <div className={styles.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={styles.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;