import React from 'react'
import {useRouter} from 'next/router'

const Post = ({news}) => {

    console.log(news)
    const router = useRouter()
    const { locales, locale } = router

    const t = locale === 'en' ? news.data.translations[0] : locale === 'ru' ? news.data.translations[1]: locale === 'tm' ? news.data.translations[2] : ''

    return (
        <div style={{position: 'relative', width: '100%', height: '200px', marginTop:'100px',marginBottom:'100px', backgroundColor:'gray'}}>
            {/* <h2>{news.data}</h2> */}
            {/* {
                news.data.map(post => (
                    <p style={{color: 'white'}}>{JSON.stringify(post)}</p>
                    ))
            } */}
            <p style={{color: 'white'}}>{JSON.stringify(news.data.translations[0])}</p>
            <p>{t.title}</p>
        </div>
    )
}

export async function getStaticPaths({ locales }){
    const res = await fetch('http://localhost:8055/items/news')
    const news = await res.json()


    // const paths = news.data.map((post,i) => ({ params: { id: post.id }, locale: post.translations[i].language_code}))
    // const posts = news.data.map(post => post.id)
    const paths = []
    for(const locale of locales){
        news.data.map((post) => paths.push({ params: { id: post.id.toString() }, locale}))
    }

    return { 
        paths, fallback: false 
    }

}

export async function getStaticProps({params}){
    const {id, locale} = params
    const res = await fetch(`http://localhost:8055/items/news/${id}?fields=id,translations.*`)
    const news = await res.json()
    

    return {
        props: {
            news,
        }
    }
}




export default Post
