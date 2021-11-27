import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/Revival.module.scss'


const Revival = ({item}) => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'en' ? item.data.translations[0] : locale === 'ru' ? item.data.translations[1] : locale === 'tm' ? item.data.translations[2] : ''
    return (
        <>
            <section className={styles.revival}>
                <article className={styles.article}>
                    <div className={styles.img}>
                        <Image
                            src={`http://localhost:8055/assets/${item.data.banner.id}`}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top center"
                            // width={5472}
                            // height={3648}
                            quality={30}
                        />
                    </div>
                   
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

