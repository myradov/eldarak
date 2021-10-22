import Link from 'next/link'
import styles from './Navigation.module.scss'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'

// images
import logo from '../../public/ellogo2.svg'
import hamburger from '../../public/hamburger.svg'
import closeBtn from '../../public/close.svg'




const Navigation = () => {

    const router = useRouter()
    const { locale } = router
    // console.log(locale)

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    // const prevScrollpos = 'window.pageYOffset';
    // const [prev, setPrev] = useState(prevScrollpos)
    // const handleScroll = (e) => {
    //     const currentScrollPos = window.pageYOffset;
    //     if (prev > currentScrollPos) {
    //         document.getElementById("nav").style.top = "0";
    //     } else {
    //         document.getElementById("nav").style.top = "-80px";
    //     }
    //     setPrev(currentScrollPos)
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => removeEventListener('scroll', handleScroll)
    // },[prev])
    return (
        <nav className={styles.nav} id="nav">
            <div className={`${styles.menu}`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <a>
                            <Image src={logo} alt="El Darak Logo" width={40} height={40}/>
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
                    <li>
                        <Link href="/news">
                            <a>News</a>
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
                <div className={styles.hamburger} onClick={showSidebar}>
                    <Link href="#">
                        <a>
                            {sidebar ? <Image src={closeBtn} alt="closebtn" width={35} height={35}/> : <Image src={hamburger} alt="hamburger" width={40} height={40}/>}
                            {/* <Image src={closeBtn} alt="closebtn" width={40} height={40}/> */}
                        </a>
                    </Link>
                </div>
            </div>
            <div className={sidebar ? `${styles.sidenav} ${styles.active}` : styles.sidenav} id="sidenav">
                {/* <div className={styles.hamburger} onClick={showSidebar}>
                    <Link href="#">
                        <a>
                            {sidebar ? <Image src={hamburger} alt="closebtn" width={40} height={40}/> : <Image src={closeBtn} alt="closebtn" width={40} height={40}/>}
                        </a>
                    </Link>
                </div> */}
                <ul className={styles.menulist} onClick={showSidebar}>
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
                    <li>
                        <Link href="/news">
                            <a>News</a>
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