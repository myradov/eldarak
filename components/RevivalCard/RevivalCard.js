import React from 'react'
import Link from 'next/link'
import styles from '../RevivalCard/RevivalCard.module.scss'

const RevivalCard = () => {
    return (
        <>
            <Link href="/profile">
                <a className={styles.card}>
                    <div className={styles.cardTitle}>
                        <h2>Turkmen milli halysy</h2>
                        <p>Commodi minima doloribus aspernatur quam distinctio assumenda laboriosam vitae sequi magnam officia  laboriosam vitae sequi magnam officia.</p>
                    </div>
                    <div className={styles.cardImg}>
                        <img src="/about.jpg" alt="" />
                    </div>
                </a>
            </Link>
        </>
    )
}

export default RevivalCard
