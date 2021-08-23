import React from 'react'
import PersonasCard from '../components/PersonasCard'
import styles from '../styles/Personas.module.scss'

const Personas = () => {
    return (
        <>
        <section className={styles.personas}>
            <section className={styles.cards}>
                <PersonasCard />
                <PersonasCard />
                <PersonasCard />
                <PersonasCard />
            </section>
        </section>
           
        </>
    )
}

export default Personas
