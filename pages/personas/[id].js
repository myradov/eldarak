import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Personas.module.scss'




const Persona = ({personas}) => {
    
    const router = useRouter()
    const { locale } = router

    console.log(router)

    const t = locale === 'en' ? personas.data.translations[0] : locale === 'ru' ? personas.data.translations[1] : locale === 'tm' ? personas.data.translations[2] : ''
    
    return (
        <>
            <article className={styles.persona}>
                <div className={styles.personaImg}>
                    <Image src={`http://localhost:8055/assets/${personas.data.banner}`} width={450} height={500}/>
                </div>
                <aside className={styles.personaBody}>
                    <h2 className={styles.personaTitle}>{t.title}</h2>
                    <div dangerouslySetInnerHTML={{__html: t.content}} className={styles.personaContent}>
                    </div>
                </aside>
            </article>
            <button onClick={() => {router.back()}}>back</button>
            <Link href="#"><a className={styles.backBtn}>Go back</a></Link>
        </>
    )
}

export async function getStaticProps({params}){
    const { id } = params
    const res = await fetch(`http://localhost:8055/items/personas/${id}?fields=id,banner,translations.*`)
    const personas = await res.json()

    return {
        props: {
            personas
        }
    }
}

export async function getStaticPaths({locales}){
    const res = await fetch(`http://localhost:8055/items/personas`)
    const personas = await res.json()

    const paths = []

    for(const locale of locales){
        personas.data.map(persona => paths.push({params : { id: persona.id}, locale: locale}))
    }

    return {
        paths, fallback: false
    }

}

export default Persona
