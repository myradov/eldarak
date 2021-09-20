import React from 'react'
import Image from 'next/image'
import styles from '../styles/Contacts.module.scss'
import contactsImage from '../public/bg.jpg'
import { useRouter } from 'next/router'

const Contacts = ({data}) => {
    const router = useRouter()
    const { locale } = router

    const t = locale === 'en' ? data.data.translations[0] : locale === 'ru' ? data.data.translations[1] : locale === 'tm' ? data.data.translations[2] : '';

    // console.log(data)
    return (
        <>
            <section className={styles.contacts}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <h2 className={styles.title}>{t.title}</h2>
                        <p className={styles.subtitle}>{t.description}</p>
                    </div>
                    
                    <div className={styles.grid}>
                        <div>
                            <h4>{t.address}</h4>
                            <address>{t.street}</address>
                        </div>
                        <div>
                            <h4>{t.phone_title}</h4>
                            <address>{data.data.phone}</address>
                        </div>
                        <div>
                            <h4>{t.email_title}</h4>
                            <address>{data.data.email}</address>
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

export async function getStaticProps(){

    const res = await fetch('http://localhost:8055/items/contact?fields=banner.*,phone,email,translations.*')
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}

export default Contacts
