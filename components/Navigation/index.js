import Link from 'next/link'
import styles from './Navigation.module.scss'
import {useState} from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
// import useSWR from 'swr'
import menu from '../../menu.json'

// images
// import logo from '../../public/eldarak.svg'
import logo from '../../public/eldarak1.png'
import hamburger from '../../public/menu_ed.svg'
import closeBtn from '../../public/closebtn.svg'




const Navigation = () => {
    
    // const fetcher = async url => await fetch(url).then(r => r.json())
    // const { data: menulist } = useSWR('http://localhost:8055/items/menu?fields=id,title,translations.*', fetcher)

    const router = useRouter()
    const { locale } = router

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    
    return (
        <nav className={styles.nav} id="nav">
            <div className={`${styles.menu}`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <a>
                            <Image src={logo} alt="El Darak Logo" width={794} height={1123}/>
                        </a>
                    </Link>
                </div> 
                <ul className={styles.menulist}>
                    {/* {
                        menulist && 
                        menulist.data.map(item => (
                            <li key={item.id}>
                                <Link href={`/${item.title}`}>
                                    <a>{
                                    locale === 'en' ? item.translations[0].title : locale === 'ru' ? item.translations[1].title : locale === 'tm' ? item.translations[2].title : ''
                                    }</a>
                                </Link>
                            </li>
                        ))
                    } */}
                    {
                        menu && 
                        menu.map(item => (
                            <li key={item.title}>
                                <Link href={`/${item.title}`}>
                                    <a>{
                                    locale === 'en' ? item.translations[0].title : locale === 'ru' ? item.translations[1].title : locale === 'tm' ? item.translations[2].title : ''
                                    }</a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <div className={styles.lang}>
                    <div>
                    {
                        router.locales.map((locale) => (
                        <li key={locale}>
                            <Link href={router.asPath} locale={locale}><a>{locale}</a></Link>
                        </li>
                        ))
                    }
                    </div>
                </div>
                <div className={styles.hamburger} onClick={showSidebar}>
                    <Link href="#">
                        <a>
                            {sidebar ? <Image src={closeBtn} alt="closebtn" width={40} height={40}/> : <Image src={hamburger} alt="hamburger" width={40} height={40}/>}
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
                    {
                        menu && 
                        menu.map(item => (
                            <li key={item.title}>
                                <Link href={`/${item.title}`}>
                                    <a>{
                                    locale === 'en' ? item.translations[0].title : locale === 'ru' ? item.translations[1].title : locale === 'tm' ? item.translations[2].title : ''
                                    // item.translations[1].title
                                    }</a>
                                </Link>
                            </li>
                        ))
                    }
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

export default Navigation;