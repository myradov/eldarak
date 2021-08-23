import React from 'react'
import styles from '../styles/News.module.scss'
import NewsCard from '../components/News.js'

const News = () => {
    return (
        <>
            <section className={styles.news}>
                <NewsCard />
                <NewsCard />
            </section>
        </>
    )
}

export default News
