import React from 'react'
import Link from 'next/link'
import styles from './NewsCard.module.scss'
import { useRouter } from 'next/router'



const NewsCard = ({post}) => {
    const router = useRouter()
    const { locale } = router

    const t = locale === 'en' ? post.translations[0] : locale === 'ru' ? post.translations[1] : locale === 'tm' ? post.translations[2] : ''

    // console.log(t)
    console.log(`hello post ${post.translations[0].title}`)
    console.log(`hello t ${t.id}`)

    return (
        <>
            <Link href={`/news/${post.id}`} locale={false}>
                <a className={styles.card}>
                    {/* <div className={styles.card}> */}
                        <div className={styles.cardTitle}>
                            <h3 className={styles.title}>
                                {t.title}
                            </h3>
                            <h3 className={styles.description}>{t.slug}</h3>
                        </div>
                        
                    {/* </div> */}
                </a>
            </Link>
       
            
        </>
    )
}

export default NewsCard
