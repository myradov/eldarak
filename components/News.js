import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
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
                            <h2 style={{position:"absolute", bottom:"10px", left:"10px", zIndex:"2"}}>Title</h2>
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
                            <h2 style={{position:"absolute", bottom:"10px", left:"10px", zIndex:"2"}}>Title</h2>
                        </article>
                        <div className={styles.bgShadow}></div>
                    </a>
                </Link>
                
            </section>
        </>
    )
}

export default News