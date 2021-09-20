import Link from 'next/link'
import styles from './Navigation.module.scss'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'




const Navigation = () => {

    const router = useRouter()
    const { locale } = router
    console.log(locale)

    const prevScrollpos = 'window.pageYOffset';
    const [prev, setPrev] = useState(prevScrollpos)
    const handleScroll = (e) => {
        const currentScrollPos = window.pageYOffset;
        if (prev > currentScrollPos) {
            document.getElementById("nav").style.top = "0";
        } else {
            document.getElementById("nav").style.top = "-80px";
        }
        setPrev(currentScrollPos)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => removeEventListener('scroll', handleScroll)
    },[prev])
    return (
        <nav className={styles.nav} id="nav">
            <div className={`${styles.menu}`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <a>
                            <img src="ellogo2.svg" alt="El Darak Logo" width={100} height={40}/>
                        </a>
                    </Link>
                </div> 
                <ul className={styles.menulist}>
                    <li>
                        <Link href="/about">
                            <a>About Us</a>
                        </Link>
                    </li>
                    <li>
                    <Link href="/revival">
                            <a>Revival</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/articles">
                            <a>Articles</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/personas">
                            <a>Persona</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/market">
                            <a>Market</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts">
                            <a>Contacts</a>
                        </Link>
                    </li>
                </ul>

                <div className={styles.lang}>
                    <div>
                    {
                        router.locales.map((locale) => (
                        <li key={locale}>
                            <Link href={router.asPath} locale={locale}><a>{locale}</a></Link>
                            {/* <Link href={`http://localhost:8055/items/pages?fields=translations.*&deep[translations][_filter][languages_code][_eq]=ru-RU`} locale={locale}><a>{locale}</a></Link> */}
                        </li>
                        ))
                    }
                    </div>
                </div>
            </div>
        </nav>
    )
}


// export async function getStaticProps(){

//     const res = await fetch('http://localhost:8055/items/pages?fields=title,translations.title')
//     const navlinks = await res.json()


//     if(!navlinks){
//         return { 
//           notFound: true
//         }
//     }

//     return {
//         props: {
//             navlinks
//         }
//     }
// }

export default Navigation;