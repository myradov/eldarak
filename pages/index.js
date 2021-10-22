import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

// test image
import image from '../public/carpet_1.jpg'



// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// components
import Articles from '../components/Articles'
import News from '../components/NewsCard'


// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export default function Home({home, about, revival, articles}) {
  // console.log(home)
  // console.log(about)
  // console.log(articles)
  // console.log(news)
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
        <Image
          alt="Carpet"
          src={`http://localhost:8055/assets/${home.data.banner}`}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.shadow} style={{transform}}></div>
      </main>
     
     {/** About us page **/}

      <section className={styles.about}>
        <section className={styles.headline}>
          <p className={styles.excerpt}>about eldarak</p>
          <h3>{a.title}</h3>
          <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut enim atque itaque, consectetur et dolore animi ipsam minima ipsum non corporis placeat doloremque autem delectus iusto soluta temporibus fugit culpa.</p>
        </section> 
        <div className={styles.aboutCard}>
          <div>
            <img src="slider.jpg" alt="" width="500"/>
          </div>
          <div>
            <h2>What we do?</h2>
            <p>
            {a.description}
              </p>
          </div>
        </div>
        <Link href="/about"><a className={styles.aboutBtn}>Read more</a></Link>
      </section> 

      {/** Revival page **/}
      
      <main className={styles.revival} id="revival">
        <section className={styles.headline}>
          <p className={styles.excerpt}>revival</p>
          <h3>{r.title}</h3>
          {/* <p className={styles.subtitle}>{r.description}</p> */}
        </section>
        <div className={styles.content}>
          <Image 
            alt="Mountains"
            src={`http://localhost:8055/assets/${revival.data.banner}`}
            // layout="fill"
            objectFit="cover"
            quality={100}
            width={1440}
            height={685}
          />
          <div className={styles.slideTitle}>
            <h2 className={styles.description}>{r.description}</h2>
            <Link href="/revival">
              <a className={styles.btn}>{r.button}</a>
            </Link>
          </div>
        </div> 
      </main>

      {/** Articles page **/}

      <main className={styles.article} id="articles">
        {/* {
          articles.data.map(article => (
            <section className={styles.headline}>
              <p className={styles.excerpt}>articles</p>
              <h3>{article.translations[0].title}</h3>
              <p className={styles.subtitle}>Collecting nuances and old craftsmen’s secrets by crumbs, we revive Turkmen carpets in accordance with the forgotten ancient technologies. They are the carpets, with the energetics going back into millennia.</p>
            </section>
          ))
        } */}
        <Swiper
            spaceBetween={50}
            slidesPerView={1.2}
            navigation
            pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
            {
              articles.data.map(article => (
                <SwiperSlide key={article.id}>
                  <Articles article={article} />
                </SwiperSlide>
              ))
            }
        </Swiper>
      </main>
      
      <main className={styles.market} id="market">
        <section className={styles.headline}>
          <p className={styles.excerpt}>market</p>
          <h3>Discover more</h3>
        </section>
        <section className={styles.marketGrid}>
          <article className={styles.marketCard}>
            <Link href="#">
              <a className={styles.marketCardBody}>
                <Image src={image} width={350} height={358} layout="responsive"/>
                <div className={styles.marketCardTxt}>
                  <h3 className={styles.marketCardTitle}>Carpets</h3>
                </div>
              </a>
            </Link>
          </article>
        </section>
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
