import Image from 'next/image'
import styles from '../styles/About.module.scss'
// import aboutImage from '../public/slider.jpg'
import { useRouter } from 'next/router'


const About = ({data}) => {
  const router = useRouter()
  const { locale } = router

  const t = locale === 'en' ? data.data.translations[0] : locale === 'ru' ? data.data.translations[1] : locale === 'tm' ? data.data.translations[2] : ''
  
  // console.log(data, router)
    return (
        <>
          <section className={styles.about}>
            <article className={styles.article}>
              <section className={styles.title}>
                <h2 className={styles.h2}>{t.title}</h2>
              </section>
              <section className={styles.content}>
                <div className={styles.textContent}>
                    <h4>{t.content}</h4>
                </div>
                <div className={styles.img}>
                  <Image
                    src={`http://localhost:8055/assets/${data.data.banner.id}`}
                    // layout="fill"
                    width={6157}
                    height={4424}
                    quality={30}
                  />
                </div>
              </section>
                {/* <div className={styles.excerpt}>
                    <h4>{t.comment}</h4>
                </div> */}
            </article>
          </section> 
        </>
    )
}

export async function getStaticProps({locale}){

  const res = await fetch('http://localhost:8055/items/about?fields=banner.*,translations.*');
  const data = await res.json();

  // http://localhost:8055/assets/ec9b226a-b25c-4b2d-867b-3b18f7a5d033
  

  if(!data){
    return { 
      notFound: true
    }
  }

  return {
    props: {
      data
    }
  }

}

export default About


     {/* {data.map((post) => (
            <article className={styles.article} key={post.id}>
                <div>
                  {/* <h4 className={styles.excerpt}>{post.translations.map((translation) => (

          //         ))}</h4> */}
          //         {post.translations.map((translation) => (
          //           <h4>{translation.title}</h4>
          //         ))}
          //       </div>
          //       <div className={styles.textContent}>
          //           <h2 className={styles.title}>{post.description}</h2>
          //           <p>{post.content}</p>
          //       </div>
          //       <Image
          //         src={`http://localhost:8055/assets/${post.banner.id}`}
          //         // layout="responsive"
          //         width={1300}
          //         height={760}
          //         quality={30}
          //       />
          //   </article>
          // ))} */}
