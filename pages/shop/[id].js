import React, {useState} from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Shop.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, {
    Navigation,Thumbs
  } from 'swiper';
  
  // install Swiper modules
SwiperCore.use([Navigation,Thumbs]);



const Product = ({carpets}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
    const router = useRouter()
    const { locale } = router

    console.log(carpets)

    const t = locale === 'en' ? carpets.data.translations[0] : locale === 'ru' ? carpets.data.translations[1] : locale === 'tm' ? carpets.data.translations[2] : ''
    
    return (
        <>
            <article className={styles.product}>
                <div className={styles.productImg}>
                    {
                        <>
                            <Swiper
                                spaceBetween={10} 
                                navigation={true} 
                                thumbs={{ swiper: thumbsSwiper }} 
                                className="mySwiper2"
                            >
                                {
                                carpets.data.gallery.map(image =>(
                                    <SwiperSlide>
                                        <Link href={`http://localhost:8055/assets/${image.directus_files_id}`}>
                                            <a className={styles.ImgWrap}>
                                                <Image src={`http://localhost:8055/assets/${image.directus_files_id}`} width={3386} height={3648} layout="responsive" objectFit="screen" objectPosition="center"/>
                                            </a>
                                        </Link>
                                    </SwiperSlide>
                                ))
                                }
                            </Swiper>
                            <Swiper onSwiper={setThumbsSwiper} 
                                    spaceBetween={10} 
                                    slidesPerView={4} 
                                    // freeMode={true} 
                                    watchSlidesProgress={true} 
                                    className="mySwiper">
                                {
                                    carpets.data.gallery.map(image =>(
                                        <SwiperSlide>
                                            <Image src={`http://localhost:8055/assets/${image.directus_files_id}`} width={3386} height={3648} />
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>
                        </>
                    }
                </div>
                <aside className={styles.porductBody}>
                    <section className={styles.grid}>
                        <h2 className={styles.productTitle}>{t.title}</h2>
                        <div className={styles.productDescription}>
                            <h4>{t.description}</h4>
                        </div>
                    </section>
                    <div dangerouslySetInnerHTML={{__html: t.content}} className={styles.productContent}>
                    </div>
                    <div className={styles.btn}>
                        <Link href="/contacts">
                            <a>{locale === 'en' ? 'Send Request' : locale === 'ru' ? 'Отправить заявку' : locale === 'tm' ? 'Teklip ugradyň' : ''}</a>
                        </Link>
                    </div>
                </aside>
                
            </article>
        </>
    )
}

export async function getStaticProps({params}){
    const { id } = params
    const res = await fetch(`http://localhost:8055/items/carpets/${id}?fields=id,banner.*,gallery.*,translations.*`)
    const carpets = await res.json()

    return {
        props: {
            carpets
        }
    }
}

export async function getStaticPaths({locales}){
    const res = await fetch(`http://localhost:8055/items/carpets`)
    const carpets = await res.json()

    const paths = []

    for(const locale of locales){
        carpets.data.map(product => paths.push({params : { id: product.id}, locale: locale}))
    }

    return {
        paths, fallback: false
    }

}

export default Product
