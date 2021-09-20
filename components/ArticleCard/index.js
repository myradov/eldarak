import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import articleImage from '../../public/bg.jpg'
import styles from './ArticleCard.module.scss'

const ArticleCard = ({article}) => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'en' ? article.translations[0] : locale === 'ru' ? article.translations[1] : locale === 'tm' ? article.translations[2] : ''
    return (
        <>
            <article className={styles.article}>
                <div className={styles.cardImg}>
                    <Image src={`http://localhost:8055/assets/${article.banner}`} className={styles.image} width={1000} height={680}/>
                </div>
                <div className={styles.cardTxt}>
                    <Link href="/articles">
                        <a>
                            {/* <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2> */}
                            <h2>{t.title}</h2>
                        </a>
                    </Link>
                    <p>{t.description}</p>
                </div>
            </article>
        </>
    )
}

export default ArticleCard
