import React from 'react'
import styles from '../styles/News.module.scss'
import NewsCard from '../components/NewsCard'

const News = ({news}) => {
    

    console.log(news)
    return (
        <>
            <section className={styles.news}>
                {
                    news.data.map(post => (
                        <NewsCard post={post} />
                    ))
                }
            </section>
        </>
    )
}

export async function getStaticProps(){
    const res = await fetch('http://localhost:8055/items/news?fields=translations.title,slug')
    const news = await res.json()

    return {
        props: {
            news
        }
    }
}

export default News
