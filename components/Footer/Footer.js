import styles from './footer.module.scss'
import Link from 'next/link'

export default function Footer(){
    return (
        <footer className={styles.footer}>
          <div className={styles.sections}>
            <Link href="/">
              <a className={styles.logo}>
                <img src="/ellogo3.svg" alt="Vercel Logo"/>
              </a>
            </Link>
          </div>
          <div className={styles.sections}>
            <ul className={styles.list}>
              <li className={styles.menulist}>
                <Link href="/about"><a>About us</a></Link>
              </li>
              <li className={styles.menulist}>
                <Link href="/news"><a>News</a></Link>
              </li>
              <li className={styles.menulist}>
                <Link href="/contacts"><a>Contacts</a></Link>
              </li>
            </ul>
          </div>
          <div className={styles.sections}>
            <ul className={styles.list}>
              <li className={styles.sociallist}>
                <Link href="/about"><a><img src="white-insta.svg" alt="instagram" /></a></Link>
              </li>
              <li className={styles.sociallist}>
                <Link href="/about"><a><img src="white-fb.svg" alt="facebook" /></a></Link>
              </li>
            </ul>
          </div>
      </footer>
    )
}