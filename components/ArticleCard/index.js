import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import articleImage from '../../public/bg.jpg'
import styles from './ArticleCard.module.scss'

const ArticleCard = () => {
    return (
        <>
            <article className={styles.article}>
                <div className={styles.cardImg}>
                    <Image src={articleImage} className={styles.image} layout='responsive' />
                </div>
                <div className={styles.cardTxt}>
                    <Link href="/articles">
                        <a>
                            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
                        </a>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident eum dolor non quod mollitia natus quasi, commodi ipsa? Esse, eos?</p>
                </div>
            </article>
        </>
    )
}

export default ArticleCard
