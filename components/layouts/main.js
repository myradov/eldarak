import Head from 'next/head'
// import Link from 'next/link'
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
import Navigation from '../Navigation'
import Footer from '../footer'

const name = "ED"
export const siteTitle = "Sample Website"

export default function MainLayout({ children }) {
    return (
        <div className="bg-red-100 w-full mx-auto">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                    siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <title>{siteTitle}</title>  
            </Head>
            <Navigation />
            <main className="relative w-full h-auto py-20 bg-purple-600">{children}</main>
            <Footer />
        </div>
    )
}