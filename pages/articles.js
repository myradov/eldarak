import React from 'react'
import styles from '../styles/Articles.module.scss'
import ArticleCard from '../components/ArticleCard/index.js';

const Articles = () => {
    return (
        <>
            <section className={styles.articles}>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </section>
        </>
    )
}

export default Articles
