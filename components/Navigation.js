import Link from 'next/link'
import styles from '../styles/Home.module.css'
// import {useState, useEffect} from 'react'

export default function Navigation(){
    // const [menubg, setMenybg] = useState(styles.bgi)
    // const handleScroll = (e) => {
    //    if(window.scrollY > 30){
    //        return setMenybg(styles.bg)
    //    }
    //    else if(window.scrollY < 30){
    //        return setMenybg(styles.bgi)
    //    }
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => removeEventListener('scroll', handleScroll)
    // },[])
    return (
        <nav className={styles.nav}>
            <div className={styles.menu}>
                <div className={styles.logo}>
                    <Link href="/">
                        <a>
                            <img src="ellogo2.svg" alt="El Darak Logo" width={100} height={40}/>
                        </a>
                    </Link>
                </div> 
                <ul className={styles.menulist}>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="#news">Revival</a>
                    </li>
                    <li>
                        <a href="#about">Articles</a>
                    </li>
                    <li>
                        <a href="#news">News</a>
                    </li>
                    <li>
                        <a href="#about">Persona</a>
                    </li>
                    <li>
                        <a href="#news">Market</a>
                    </li>
                    <li>
                        <a href="#news">Contacts</a>
                    </li>
                </ul>

                <div className={styles.lang}>
                    <select>
                        <option value="ENG">ENG</option>
                        <option value="RUS">RUS</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}