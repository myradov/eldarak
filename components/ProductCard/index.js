import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './ProductCard.module.scss'

// import productImg from '../../public/carpet_1.jpg'

const index = ({product}) => {
    // console.log(product)
    const router = useRouter()
    const { locale } = router

    const t = locale === 'en' ? product.translations[0] : locale === 'ru' ? product.translations[1] : locale === 'tm' ? product.translations[2]: ''

    return (
        <>
            <article className={styles.product}>
                <Link href={`shop/${product.id}`}>
                    <a>
                        <Image src={`http://localhost:8055/assets/${product.banner.id}`} width={3386} height={3648} className={styles.Img} alt="products"/>
                        <div className={styles.info}>
                            <h2 className={styles.title}>
                                {t.title}
                            </h2>
                            {/* <h4 className={styles.subtitle}>{t.description}</h4> */}
                        </div>
                    </a>
                </Link>
                <div className={styles.btn}>
                    <Link href="/contacts">
                        <a>{locale === 'en' ? 'Send Request' : locale === 'ru' ? 'Отправить заявку' : locale === 'tm' ? 'Teklip ugradyň' : ''}</a>
                    </Link>
                </div>
            </article>
        </>
    )
}

export default index
