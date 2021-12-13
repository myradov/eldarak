import React, {useState} from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Shop.module.scss'
import Modal from '../../components/Modal'

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, {
    Navigation,Thumbs
  } from 'swiper';
  
  // install Swiper modules
SwiperCore.use([Navigation,Thumbs]);



const Product = ({carpets}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [showModal, setShowModal] = useState(false);
    
    const router = useRouter()
    const { locale } = router

    // console.log(carpets)

    const t = locale === 'en' ? carpets.data.translations[0] : locale === 'ru' ? carpets.data.translations[1] : locale === 'tm' ? carpets.data.translations[2] : ''
    
    return (
        <>
            <article className={styles.product} >
                <div className={styles.productImg}>
                    {
                        <>
                            <Swiper
                                spaceBetween={10} 
                                slidesPerView={1}
                                navigation={true} 
                                thumbs={{ swiper: thumbsSwiper }} 
                                className="mySwiper2"
                            >
                                {
                                carpets.data.gallery.map(image =>(
                                    <SwiperSlide>
                                        {/* <Link href={`http://localhost:8055/assets/${image.directus_files_id}`}> */}
                                            <a className={styles.ImgWrap}>
                                                <label htmlFor="zoominout">
                                                    <Image src={`http://localhost:8055/assets/${image.directus_files_id}`}  layout="fill" objectFit="contain" objectPosition="center"/>
                                                </label>
                                                <input type="checkbox" id="zoominout"/>
                                                {/* <Image src={`http://localhost:8055/assets/${image.directus_files_id}`}  layout="fill" objectFit="contain" objectPosition="center"/> */}
                                            </a>
                                        {/* </Link> */}
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
                                            <div className={styles.thumbs}>
                                                <Image src={`http://localhost:8055/assets/${image.directus_files_id}`} layout="fill" objectFit="contain" objectPosition="center"/>
                                            </div>
                                            {/* <Image src={`http://localhost:8055/assets/${image.directus_files_id}`} width={3386} height={3648}layout="fill" /> */}
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
                    <div className={styles.btn} onClick={() => setShowModal(true)}>
                        <a  className="btn btn-">{locale === 'en' ? 'Send Request' : locale === 'ru' ? 'Отправить заявку' : locale === 'tm' ? 'Teklip ugradyň' : ''}</a>
                    </div>
                </aside>
                <Modal onClose={() => setShowModal(false)} show={showModal}/>
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
    const res = await fetch(`http://localhost:8055/items/carpets?fields=id,banner.*,gallery.*,translations.*`)
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
