import React from 'react'
import styles from '../styles/Article.module.scss'
import ArticleCard from '../components/ArticleCard/index.js';

const Articles = ({articles}) => {
    // console.log(articles)
    return (
        <>
            <section className={styles.articles}>
                {
                    articles.data.map(article => (
                        <ArticleCard article={article} />
                    ))
                }
            </section>
        </>
    )
}


// http://localhost:8055/items/articles?fields=banner.*,translations.*
export async function getStaticProps(){
    const res = await fetch('http://localhost:8055/items/articles?fields=banner,translations.*')
    const articles = await res.json()

    return {
        props: {
            articles
        }
    }
}

export default Articles
