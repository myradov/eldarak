import Image from 'next/image'
import { useEffect, useState } from 'react'
// import useMousePosition from '../libs/useMousePosition'
// import styles from '../styles/About.module.css'

export default function Mouse(){
    // const { x, y } = useMousePosition()
    const [transform, setTransform] = useState(null)
    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            let x = e.clientX - (document.documentElement.clientWidth * 1.5);
            let y = e.clientY - (document.documentElement.clientHeight * 1.5);
            setTransform('translate(' + x + 'px, ' + y + 'px)')
            // setTransform(`translate(' ${x} px, ${y} px')`)
            // console.log(Math.floor(x))
            // setTransform()
        })
        document.addEventListener('touchmove', (e) => {
            let x = e.touches[0].clientX - (document.documentElement.clientWidth * 1.5);
            let y = e.touches[0].clientY - (document.documentElement.clientHeight * 1.5);
            setTransform('translate(' + x + 'px, ' + y + 'px)')
            // console.log(Math.floor(`Touchmove: ${x}`))
        })
        // console.log(document.documentElement.clientHeight)
    },[])

    return (
        <>
        <section className={styles.test}>
            <Image
                src="/bg.jpg"
                layout="fill"
                objectFit="cover"
                quality={30}
            />
            <div className={styles.shadow} style={{transform}}></div>
        </section>
        </>
    )
}