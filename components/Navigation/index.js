import Link from 'next/link'
import styles from './Navigation.module.scss'
import {useState, useEffect} from 'react'

export default function Navigation(){
    // const [menubg, setMenubg] = useState(styles.bgi)
    const prevScrollpos = 'window.pageYOffset';
    const [prev, setPrev] = useState(prevScrollpos)
    const handleScroll = (e) => {
        // console.log(`prev ${prevScrollpos}`)
        const currentScrollPos = window.pageYOffset;
        // console.log(`current ${currentScrollPos}`)
        if (prev > currentScrollPos) {
            // console.log('30+')
            document.getElementById("nav").style.top = "0";
        } else {
            // console.log('30-')
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
                        <Link href="/news">
                            <a>News</a>
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
                        <Link href="/en">
                            <a>EN</a>
                        </Link>
                        <Link href="/tm">
                            <a>TM</a>
                        </Link>
                        <Link href="/ru">
                            <a>RU</a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}