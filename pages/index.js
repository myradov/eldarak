import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {useEffect} from 'react'
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// components
import News from '../components/News'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export default function Home() {
  useEffect(()=>{
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  },[])
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.bgWrap}>
        <Image
          alt="Mountains"
          src="/bg.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.bgLogo}>
          <Image 
            alt="ED logo"
            src="/ellogo3.svg"
            width={150}
            height={150}
          />
          {/* <img src="vercel.svg" alt="logo"/> */}
        </div>
      </main>
      <section className={styles.card}>
        <h1 className={styles.title}>Articles</h1>  
      </section>      

      <main className={styles.slider}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Image 
              alt="Mountains"
              src="/slider.jpg"
              // layout="fill"
              objectFit="cover"
              quality={100}
              width={1440}
              height={685}
            />
            <div className={styles.slideTitle}>
              <h2 className={styles.description}>возраждение старинных технологии</h2>
              <Link href="#">
                <a>READ</a>
              </Link>
            </div>
            
            {/* <img src="bg.jpg" alt="" width={400}/> */}
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              alt="Mountains"
              src="/bg.jpg"
              // layout="fill"
              objectFit="cover"
              quality={100}
              width={1440}
              height={685}
            />
            <div className={styles.slideTitle}>
              <h2 className={styles.description}>возраждение старинных технологии</h2>
              <Link href="#">
                <a>READ</a>
              </Link>
            </div>
            {/* <img src="bg.jpg" alt="" width={400}/> */}
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              alt="Mountains"
              src="/slider.jpg"
              // layout="fill"
              objectFit="cover"
              quality={100}
              width={1440}
              height={685}
            />
            <div className={styles.slideTitle}>
              <h2 className={styles.description}>возраждение старинных технологии</h2>
              <Link href="#">
                <a>READ</a>
              </Link>
            </div>
            {/* <img src="bg.jpg" alt="" width={400}/> */}
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              alt="Mountains"
              src="/slider.jpg"
              // layout="fill"
              objectFit="cover"
              quality={100}
              width={1440}
              height={685}
            />
            <div className={styles.slideTitle}>
              <h2 className={styles.description}>возраждение старинных технологии</h2>
              <Link href="#">
                <a>READ</a>
              </Link>
            </div>
            {/* <img src="bg.jpg" alt="" width={400}/> */}
          </SwiperSlide>
          
          {/* <SwiperSlide><img src="bg.jpg" alt="" width={400}/></SwiperSlide> */}
        </Swiper>
      </main>
      <section className={styles.card}>
        <h1 className={styles.title}>News</h1>  
      </section>   
      <section className={styles.sections}>
        <News />
      </section>
     
    </div>
  )
}
