import React from 'react'
import styles from '../../styles/News.module.scss'
import NewsCard from '../../components/NewsCard'

const index = ({news}) => {
    

    // console.log(news)
    return (
        <>
            <section className={styles.news}>
                {
                    news.data.map(post => (
                        <NewsCard post={post} key={post.id}/>
                    ))
                }
            </section>
        </>
    )
}

export async function getStaticProps(){
    const res = await fetch('http://localhost:8055/items/news?fields=*.*')
    const news = await res.json()

    return {
        props: {
            news
        }
    }
}

export default index
