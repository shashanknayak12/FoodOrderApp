import React from 'react';
import ReactDom from 'react-dom';
import styles from './Modal.module.css'




const Backdrop = (props) => {
    return (
        <div onClick={props.onCloseCart} className={styles.backdrop}>

        </div>
    )

}

const ModalOverLay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )

}

const protalElement = document.getElementById('overlays')

function Modal(props) {
    return (
        <React.Fragment>

            {ReactDom.createPortal(<Backdrop onCloseCart={props.onCloseCart} />, protalElement)}

            {ReactDom.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, protalElement)}


        </ React.Fragment>
    );
}

export default Modal;