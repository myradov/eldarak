import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './ProductCard.module.scss'

import productImg from '../../public/carpet_1.jpg'

const index = () => {
    return (
        <>
            <article className={styles.product}>
                <Link href="#">
                    <a>
                        <Image src={productImg} layout="responsive" className={styles.Img} alt="products"/>
                        <div className={styles.info}>
                            <h2 className={styles.title}>
                                <Link href="#">
                                    <a>
                                        <h2 className={styles.title}>Santos de cartier watch</h2>
                                    </a>
                                </Link>
                            </h2>
                            <h4 className={styles.subtitle}>Medium model, automatic movement</h4>
                        </div>
                        <div className={styles.btn}>
                            <Link href="#">
                                <a>Send Inquiry</a>
                            </Link>
                        </div>
                    </a>
                </Link>
                
            </article>
            {/* <article className={styles.product}>
                <Image src={productImg} layout="responsive"/>
                <div className={styles.info}>
                    <h2 className={styles.title}>Santos de cartier watch</h2>
                    <h4 className={styles.subtitle}>Medium model, automatic movement</h4>
                </div>
                <div className={styles.btn}>
                    <Link href="#">
                        <a>Send Inquiry</a>
                    </Link>
                </div>
            </article> */}
            
        </>
    )
}

export default index
