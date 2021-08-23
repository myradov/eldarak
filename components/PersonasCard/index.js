import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import personasImage from '../../public/about.jpg'
import styles from './PersonasCard.module.scss'

const index = () => {
    return (
        <>
            <article className={styles.card}>
                <div className={styles.cardImg}>
                    <Image src={personasImage} width={350} height={400}/>
                </div>
                <div className={styles.cardTxt}>
                    <Link href="/personas">
                        <a>
                            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, dolor.</h2>
                        </a>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt similique ea consequatur sunt dolores, veniam ducimus recusandae aliquid quasi!</p>
                </div>
            </article>
        </>
    )
}

export default index
