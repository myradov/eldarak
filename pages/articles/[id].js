import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../../styles/Article.module.scss'

const Article = ({articles}) => {
    const router = useRouter()
    const { locale } = router

    const t = locale === 'en' ? articles.data.translations[0] : locale === 'ru' ? articles.data.translations[1] : locale === 'tm' ? articles.data.translations[2] : ''
    
    return (
        <>
            {/* {
                <p style={{color: 'white'}}>{JSON.stringify(articles.data.translations[0])}</p>
            } */}

            <article className={styles.article}>
                <h2 className={styles.articleTitle}>{t.title}</h2>
                <div className={styles.articleImg}>
                    <Image src={`http://localhost:8055/assets/${articles.data.banner}`} width={4032} height={2128}/>
                </div>
                <div className={styles.articleContent} dangerouslySetInnerHTML={{__html: t.content}}>
                </div>

                <button onClick={() => {router.back()}}>Go back</button>
            </article>

        </>
    )
}


export async function getStaticPaths({locales}){
    const res = await fetch(`http://localhost:8055/items/articles`)
    const articles = await res.json()
    
    const paths = []
    for(const locale of locales){
        articles.data.map(article => paths.push({params : {id : article.id.toString() }, locale}))
    }

    return {
        paths, fallback: false
    }
}

export async function getStaticProps({params}){
    const { id } = params
    const res = await fetch(`http://localhost:8055/items/articles/${id}?fields=id,banner,translations.*`)
    const articles = await res.json()

    return {
        props: {
            articles
        }
    }
}

export default Article
