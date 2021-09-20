import React from 'react'
import styles from '../styles/Market.module.scss'
import ProductCard from '../components/ProductCard'

const Market = () => {
    return (
        <>
            <section className={styles.market}>
                <main className={styles.products}>
                    <ProductCard />
                </main>
            </section>
            
        </>
    )
}

export default Market
