import React from 'react'
import PersonasCard from '../components/PersonasCard'
import styles from '../styles/Personas.module.scss'

const Personas = ({personas}) => {

    return (
        <>
        <section className={styles.personas}>
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
    const res = await fetch('http://localhost:8055/items/personas?fields=banner,translations.*')
    const personas = await res.json()

    return {
        props: {
            personas
        }
    }
}

export default Personas
