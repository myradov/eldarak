import styles from './footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import {useRouter} from 'next/router'
import insta from '../../public/white-insta.svg'
import fb from '../../public/white-fb.svg'

export default function Footer(){
    const fetcher = async url => await fetch(url).then(r => r.json())
    const { data: menulist } = useSWR('http://localhost:8055/items/menu?fields=id,title,translations.*', fetcher)

    const router = useRouter()
    const { locale } = router
    return (
        <footer className={styles.footer}>
          <div className={styles.sections}>
            <Link href="/">
              <a className={styles.logo}>
                <img src="/eldarak1.png" alt="Vercel Logo"/>
              </a>
            </Link>
          </div>
          <div className={styles.sections}>
            <ul className={styles.list}>
            {
              menulist && 
              menulist.data.map(item => (
                  <li key={item.id} className={styles.menulist}>
                      <Link href={`/${item.title}`}>
                          <a>{
                          locale === 'en' ? item.translations[0].title : locale === 'ru' ? item.translations[1].title : locale === 'tm' ? item.translations[2].title : ''
                          }</a>
                      </Link>
                  </li>
              ))
            }
            </ul>
          </div>
          <div className={styles.sections}>
            <ul className={styles.list}>
              <li className={styles.sociallist}>
                <Link href="/about"><a><Image src={insta} alt="instagram"/></a></Link>
              </li>
              <li className={styles.sociallist}>
                <Link href="/about"><a><Image src={fb} alt="facebook"/></a></Link>
              </li>
            </ul>
          </div>
      </footer>
    )
}