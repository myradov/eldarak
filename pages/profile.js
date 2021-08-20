import React from 'react'
import styles from '../styles/Profile.module.scss'
import NewsCard from '../components/NewsCard/NewsCard'
import RevivalCard from '../components/RevivalCard/RevivalCard'

const Profile = () => {
    return (
        <div className={styles.wrapper}>
            <h3>hello world</h3>

        <div className={styles.news}>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
        <div className={styles.revival}>
            <RevivalCard />
            <RevivalCard />
        </div>
           
        </div>
    )
}

export default Profile
