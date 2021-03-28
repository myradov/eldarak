import Image from 'next/image'
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <>
          <section className={styles.about}>
            <div className={styles.title}>
              <h2>About us</h2>
            </div>
            <article className={styles.article}>
              <div>
                <h2>Turkmen Carpets</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio in nobis nulla doloremque praesentium quis id excepturi eaque magnam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio in nobis nulla doloremque praesentium quis id excepturi eaque magnam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio in nobis nulla doloremque praesentium quis id excepturi eaque magnam.</p>
              </div>
              <Image
                src="/about.jpg"
                width={600}
                height={660}
                quality={30}
              />
            </article>
          </section> 
        </>
    )
}

export default About