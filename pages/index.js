import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import {useEffect, useState} from 'react'
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// components
import News from '../components/News'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export default function Home() {
  const [transform, setTransform] = useState(null)
  useEffect(() => {
      document.addEventListener('mousemove', (e) => {
          let x = e.clientX - (document.documentElement.clientWidth * 1.5);
          let y = e.clientY - (document.documentElement.clientHeight * 1.5);
          setTransform('translate(' + x + 'px, ' + y + 'px)')
          // console.log(Math.floor(x))
      });
      document.addEventListener('touchmove', (e) => {
        let x = e.touches[0].clientX - (document.documentElement.clientWidth * 1.5);
        let y = e.touches[0].clientY - (document.documentElement.clientHeight * 1.5);
        setTransform('translate(' + x + 'px, ' + y + 'px)')
        // console.log(x)
    })
      // console.log(document.documentElement.clientHeight)
  },[])
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.bgWrap}>
        
        {/* {`Your cursor is at ${x}, ${y}.`} */}
        <Image
          alt="Carpet"
          src="/bg.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.shadow} style={{transform}}></div>
        
        <div className={styles.bgLogo}>
          <Image 
            alt="ED logo"
            src="/ellogo1.svg"
            width={150}
            height={150}
          />
          {/* <img src="vercel.svg" alt="logo"/> */}
        </div>
      </main>
      
     
      <section className={styles.about}>
        <section className={styles.headline}>
          <p className={styles.excerpt}>about eldarak</p>
          <h3>About Us</h3>
          <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut enim atque itaque, consectetur et dolore animi ipsam minima ipsum non corporis placeat doloremque autem delectus iusto soluta temporibus fugit culpa.</p>
        </section> 
        <div className={styles.aboutCard}>
          <div>
            <img src="slider.jpg" alt="" width="500"/>
          </div>
          <div>
            <h2>What we do?</h2>
            <p>
            Turkmen carpet. What is it? Someone says that it is a magnificent subject of an interior, someone asserts that it is the Universe map, the thirds see history of creation of Life in a carpet. This unique product born in the heart of millennia is still an enigma and remains a focal point of endless discussions and discoveries.
              </p>
          </div>
        </div>
        <Link href="/about"><a className={styles.aboutBtn}>Read more</a></Link>
      </section> 
      
      <main className={styles.revival} id="revival">
        <section className={styles.headline}>
          <p className={styles.excerpt}>revival</p>
          <h3>Revival</h3>
          <p className={styles.subtitle}>Collecting nuances and old craftsmen’s secrets by crumbs, we revive Turkmen carpets in accordance with the forgotten ancient technologies. They are the carpets, with the energetics going back into millennia.</p>
        </section> 
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
              <h2 className={styles.description}>Revival of the ancient traditions</h2>
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
              <h2 className={styles.description}>Traditional turkmen carpets</h2>
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
              <h2 className={styles.description}>Revival of the traditional turkmen carpets</h2>
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
              <h2 className={styles.description}>Revival of the ancient traditions</h2>
              <Link href="#">
                <a>READ</a>
              </Link>
            </div>
            {/* <img src="bg.jpg" alt="" width={400}/> */}
          </SwiperSlide>
          
          {/* <SwiperSlide><img src="bg.jpg" alt="" width={400}/></SwiperSlide> */}
        </Swiper>
      </main>
       
      <section className={styles.news}>
        <section className={styles.headline}>
          <p className={styles.excerpt}>latest news</p>
          <h3>News</h3>
          <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut enim atque itaque, consectetur et dolore animi ipsam minima ipsum non corporis placeat doloremque autem delectus iusto soluta temporibus fugit culpa.</p>
        </section>  
        <News />
      </section>
    </div>
  )
}
