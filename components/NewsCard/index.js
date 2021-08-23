import React from 'react'
import Link from 'next/link'
import styles from './NewsCard.module.scss'



const NewsCard = () => {
    return (
        <>
            <Link href="/profile">
                <a className={styles.card}>
                    {/* <div className={styles.card}> */}
                        <div className={styles.cardTitle}>
                            <h3 className={styles.title}>
                                Title
                            </h3>
                            <p className={styles.description}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium repellendus deserunt cumque, obcaecati molestias ex a.
                            </p>
                        </div>
                    {/* </div> */}
                </a>
            </Link>
        {/* <div className={styles.flex}> */}
           
        {/* </div> */}
            
        </>
    )
}

export default NewsCard
