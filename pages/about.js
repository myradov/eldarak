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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eum minus esse dicta praesentium. Doloribus omnis, nulla rerum numquam tenetur ad accusantium illo natus laboriosam quaerat? Libero veniam nulla velit eveniet possimus, amet in earum, aperiam aliquid labore necessitatibus perspiciatis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eum minus esse dicta praesentium. Doloribus omnis, nulla rerum numquam tenetur ad accusantium illo natus laboriosam quaerat? Libero veniam nulla velit eveniet possimus, amet in earum, aperiam aliquid labore necessitatibus perspiciatis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio in nobis nulla doloremque praesentium quis id excepturi eaque magnam.</p>
              </div>
              <div className={styles.bgShadow}></div>
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