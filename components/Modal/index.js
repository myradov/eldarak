import React, {useState} from 'react'
import Image from 'next/image'
import styles from './Modal.module.scss'
import close from '../../public/closebtn.svg'

const Modal = ({show, onClose}) => {

    const handleSubmit = async(event) => {
        event.preventDefault()

        const res = await fetch('http://localhost:8055/items/request', {
            method: 'POST',
            body: JSON.stringify({
                email: event.target.email.value,
                message: event.target.message.value,
            }),
            headers:{
                'Content-Type': 'application/json'
            },
            responseType: 'json',
        })
        const result = await res.json()
        
        console.log(result)
        
    }
    return (
        <>
        {
            show && 
            <article className={styles.modal_container} onClick={onClose}>
                <form className={styles.modal} onSubmit={handleSubmit} onClick={e => e.stopPropagation()}>
                    <h2 className={styles.modal_title}>Please Send request</h2>
                    <div className={styles.modal_body}>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Please enter email" name="email" required />
                    </div>
                    <div className={styles.modal_body}>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Please enter message" required />
                    </div>
                    <button type="submit" className={styles.btn} >Send</button>
                    <a className={styles.modal_close} onClick={onClose}>
                        <Image src={close} width="30" height="30"/>
                    </a>
                </form>
            </article>
        }
        </>
    )
}

export default Modal
