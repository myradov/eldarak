import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
const News = () => {
    return (
        <>
            <section className={styles.grid}>
                <Link href="#">
                    <a className={styles.card}>
                        <article className={styles.article}>
                            <Image
                                src="/bg.jpg"
                                // layout="fill"
                                // objectFit="cover"
                                width={400}
                                height={300}
                            />
                            <h2>News title one</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <Link href="#">
                                <a className={styles.readbtn}>Read More</a>
                            </Link>
                        </article>
                        <div className={styles.bgShadow}></div>
                    </a>
                </Link>
                <Link href="#">
                    <a className={styles.card}>
                        <article className={styles.article}>
                            <Image
                                src="/slider.jpg"
                                // layout="fill"
                                // objectFit="cover"
                                width={400}
                                height={300}
                            />
                            <h2>News title two</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quibusdam sed doloribus</p>
                            <Link href="#">
                                <a className={styles.readbtn}>Read More</a>
                            </Link>
                        </article>
                        <div className={styles.bgShadow}></div>
                    </a>
                </Link>
                <Link href="#">
                    <a className={styles.card}>
                        <article className={styles.article}>
                            <Image
                                src="/bg.jpg"
                                // layout="fill"
                                // objectFit="cover"
                                width={400}
                                height={300}
                            />
                            <h2>News title three</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quibusdam sed doloribus quibusdam sed doloribus</p>
                            <Link href="#">
                                <a className={styles.readbtn}>Read More</a>
                            </Link>
                        </article>
                        <div className={styles.bgShadow}></div>
                    </a>
                </Link>
            </section>
        </>
    )
}

export default News