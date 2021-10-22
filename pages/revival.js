import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/Revival.module.scss'
import Card from '../components/RevivalCard/RevivalCard.js'


const Revival = ({item}) => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'en' ? item.data.translations[0] : locale === 'ru' ? item.data.translations[1] : locale === 'tm' ? item.data.translations[2] : ''
    // console.log(item)
    return (
        <>
            <section className={styles.revival}>
                <article className={styles.article}>
                    <Image
                        src={`http://localhost:8055/assets/${item.data.banner.id}`}
                        // layout="responsive"
                        width={1300}
                        height={760}
                        quality={30}
                    />
                    {/* <div className={styles.excerpt}>
                        <h4>{t.comment}</h4>
                    </div> */}
                   
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>{t.title}</h2>
                        <div dangerouslySetInnerHTML={{__html: t.content}}></div>
                    </div>
                    
                </article>
            </section> 
        </>
    )
}

export async function getStaticProps(){
    const res = await fetch('http://localhost:8055/items/revival?fields=banner.*,translations.*')
    const item = await res.json()

    return {
        props:{
            item
        }
    }
}

export default Revival


{/* <section className={styles.revival}>
    <div className={styles.grid}>
        <Card /> 
        <Card />
    </div>
</section> */}
