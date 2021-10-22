import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import Image from 'next/image'

import styles from './Articles.module.scss'



// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);




const index = ({article}) => {

    const router = useRouter()
    const { locale } = router

    const t = locale === 'en' ? article.translations[0] : locale === 'ru' ? article.translations[1] : locale === 'tm' ? article.translations[2] : ''
    // console.log(article)
    return (
        <>
            <div className={styles.slide}>
                <Image 
                    alt="Mountains"
                    src={`http://localhost:8055/assets/${article.banner}`}
                    // layout="fill"
                    objectFit="cover"
                    quality={100}
                    width={1440}
                    height={685}
                />
                <div className={styles.slideTxt}>
                    <h2 className={styles.title}>{t.title}</h2>
                    <Link href={`/articles/${article.id}`}>
                        <a className={styles.btn}>{t.button}</a>
                    </Link>
                </div>
            </div>
            
        </>
    )
}

export default index
