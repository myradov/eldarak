import React from 'react'
import styles from '../styles/Market.module.scss'
import ProductCard from '../components/ProductCard'

const Market = () => {
    return (
        <>
            <section className={styles.market}>
                <div className={styles.heading}>
                    <h2>Carpets</h2>
                </div>
                <main className={styles.products}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    {/* <ProductCard /> */}
                </main>
            </section>
            
        </>
    )
}

export default Market
