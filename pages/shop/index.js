import React from 'react'
import styles from '../../styles/Shop.module.scss'
import ProductCard from '../../components/ProductCard'
import {useRouter} from 'next/router'

const Shop = ({carpets}) => {
    const router = useRouter()
    const { locale } = router
    return (
        <>
            <section className={styles.shop}>
                <div className={styles.heading}>
                    <h2>{locale === 'en' ? 'Carpets' : locale === 'ru' ? 'Ковры' : locale === 'tm' ? 'Halylar' : ''}</h2>
                </div>
                <main className={styles.products}>
                    {
                        carpets.data.map(product => (
                            <ProductCard product={product} />
                        ))
                    }
                </main>
               
            </section>
            
        </>
    )
}

export async function getStaticProps(){
    const res = await fetch('http://localhost:8055/items/carpets?fields=id,banner.*,gallery.*,translations.*')
    const carpets = await res.json();

    return{
        props: {
            carpets
        }
    }
}

export default Shop
