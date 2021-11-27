import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import personasImage from '../../public/about.jpg'
import styles from './PersonasCard.module.scss'

const index = ({persona}) => {
    const router = useRouter()
    const { locale } = router

    const t = locale === 'en' ? persona.translations[0] : locale === 'ru' ? persona.translations[1] : locale === 'tm' ? persona.translations[2]: ''
    return (
        <>
            <article className={styles.persona}>
                <Link href={`/persons/${persona.id}`}>
                    <a className={styles.card}>
                        <div className={styles.cardImg}>
                            <Image src={`http://localhost:8055/assets/${persona.banner}`} width={3649} height={5473}/>
                        </div>
                        <div className={styles.cardTxt}>
                            <Link href={`/persons/${persona.id}`}>
                                <a>
                                    <h2>{t.title}</h2>
                                </a>
                            </Link>
                            <p>{t.description}</p>
                        </div>
                    </a>
                </Link>
                
            </article>
        </>
    )
}

export default index
