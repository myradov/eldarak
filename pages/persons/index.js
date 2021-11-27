import React from 'react'
import { useRouter } from 'next/router'
import PersonasCard from '../../components/PersonasCard'
import styles from '../../styles/Personas.module.scss'

const Personas = ({personas}) => {
    const router = useRouter()
    const { locale } = router

    const t = locale === 'en' ? 'Persons' : locale === 'ru' ? 'Персоны' : locale === 'tm' ? 'Şahsyýetler' : ''
    return (
        <>
        <section className={styles.personas}>
            <h1 className={styles.title}>{t}</h1>
            <section className={styles.cards}>
                {
                    personas.data.map(persona => (
                        <PersonasCard persona={persona} />
                    ))
                }
            </section>
        </section>
           
        </>
    )
}


export async function getStaticProps(){
    const res = await fetch('http://localhost:8055/items/personas?fields=id,banner,translations.*')
    const personas = await res.json()

    return {
        props: {
            personas
        }
    }
}

export default Personas
