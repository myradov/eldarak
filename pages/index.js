import Head from 'next/head'
import styles from '../styles/Main.module.scss'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export default function Home({home, about, revival, articles}) {
  
  const router = useRouter()
  const { locale } = router
  
  // translations
  const a = locale === 'en' ? about.data.translations[0] : locale === 'ru' ? about.data.translations[1] : locale === 'tm' ? about.data.translations[2] : ''
  const r = locale === 'en' ? revival.data.translations[0] : locale === 'ru' ? revival.data.translations[1] : locale === 'tm' ? revival.data.translations[2] : ''
  
  // Flashlight effect
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
        <div className={styles.shadow} style={{transform}}></div>
      </main>
    </div>
  )
}


export async function getStaticProps(){
  
  const res = await fetch('http://localhost:8055/items/home?fields=banner,translations.*')
  const home = await res.json();

  const resA = await fetch('http://localhost:8055/items/about?fields=banner,translations.*')
  const about = await resA.json();

  const resR = await fetch('http://localhost:8055/items/revival?fields=banner,translations.*')
  const revival = await resR.json();

  const resAr = await fetch('http://localhost:8055/items/articles?fields=id,date_created,banner,translations.*&sort=sort,-date_created&limit=3')
  const articles = await resAr.json();


  if(!home || !about || !revival){
    return{
      notFound: true,
    }
  }

  return {
    props: {
      home, about, revival, articles
    },
  }
}
