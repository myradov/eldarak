import Image from 'next/image'
import styles from '../styles/About.module.scss'
import aboutImage from '../public/slider.jpg'

const About = () => {
    return (
        <>
          <section className={styles.about}>
            <article className={styles.article}>
              <div>
                <h4 className={styles.excerpt}>About us</h4>
              </div>
              <div className={styles.textContent}>
                  <h2 className={styles.title}>Turkmen Carpets</h2>
                  <p>Turkmen carpet. What is it? Someone says that it is a magnificent subject of an interior, someone asserts that it is the Universe map, 
                    the thirds see history of creation of Life in a carpet. This unique product born in the heart of millennia is still an enigma and remains a focal point of endless discussions and discoveries. 
                    The purpose of the website is to involve visitors into multifaceted presentation of a carpet. What is the role assigned to a carpet by historians, 
                    technicians or philosophers? What are the views, which the women creating these masterpieces or artists developing sketches have?</p>
              </div>
              {/* <div className={styles.bgShadow}></div> */}
              <Image
                src={aboutImage}
                // width={840}
                // height={760}
                quality={30}
              />
            </article>
          </section> 
        </>
    )
}

export default About