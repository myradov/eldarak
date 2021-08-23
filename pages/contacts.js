import React from 'react'
import Image from 'next/image'
import styles from '../styles/Contacts.module.scss'
import contactsImage from '../public/bg.jpg'

const Contacts = () => {
    return (
        <>
            <section className={styles.contacts}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <h2 className={styles.title}>Let's Connect</h2>
                        <p className={styles.subtitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam pariatur fuga quos dolorem magnam rerum modi!</p>
                    </div>
                    
                    <div className={styles.grid}>
                        <div>
                            <h4>Address</h4>
                            <address>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, consectetur.</address>
                        </div>
                        <div>
                            <h4>Phone</h4>
                            <address>+99312223344</address>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <address>lorem@email.com</address>
                        </div>
                    </div>
                </div>
                <div className={styles.contactImg}>
                    <Image src={contactsImage} />
                </div>
                
            </section>
        </>
    )
}

export default Contacts
