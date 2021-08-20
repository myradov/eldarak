import Head from 'next/head'
// import Link from 'next/link'
import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
import Header from '../Header'
import Footer from '../Footer/Footer'


const name = "ED"
export const siteTitle = "Sample Website"


export default function MainLayout({ children }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Eldarak"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                    siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />

                <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Gentium+Book+Basic:wght@400;700&display=swap" rel="stylesheet"/>
                <title>{siteTitle}</title>  
            </Head>
            <Header />
            <main id={styles.container}>{children}</main>
            <Footer />
        </>
    )
}