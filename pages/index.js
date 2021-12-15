import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Main.module.scss'


export default function Home() {
  // Flashlight effect
  const [transform, setTransform] = useState(null)
  const [cursor, setCursor] = useState({$cursorX :'70vh', $cursorY :'70vh'})



  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
        let x = e.clientX;
        let y = e.clientY;
        document.documentElement.style.setProperty('--cursorX', x + 'px')
        document.documentElement.style.setProperty('--cursorY', y + 'px')
      //   // console.log(Math.floor(x))
      });
    
    document.addEventListener('touchmove', (e) => {
      let x = e.touches[0].clientX;
      let y = e.touches[0].clientY;
      document.documentElement.style.setProperty('--cursorX', x + 'px')
      document.documentElement.style.setProperty('--cursorY', y + 'px')
      });
  },[])



  

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
        document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
      <div className="container">
        <Head>
          <title>Home Page</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className="bgWrap" id="container">
          <div className="shadow"></div>
        </main>
        {/* <main className={styles.bgWrap}>
          <div className={styles.shadow} style={{transform}}></div>
        </main> */}
      </div>
  )
}



// document.addEventListener('mousemove', (e) => {
//   let x = e.clientX - (document.documentElement.clientWidth * 1.5);
//   let y = e.clientY - (document.documentElement.clientHeight * 1.5);
//   // setTransform('translate(' + x + 'px, ' + y + 'px)')
//   // console.log(Math.floor(x))
// });
// document.addEventListener('touchmove', (e) => {
// let x = e.touches[0].clientX - (document.documentElement.clientWidth * 1.5);
// let y = e.touches[0].clientY - (document.documentElement.clientHeight * 1.5);
// // setTransform('translate(' + x + 'px, ' + y + 'px)')
// // console.log(x)
// })


// const update = (e) => {
//   // let x = e.clientX || e.touches[0].clientX
//   // let y = e.clientY || e.touches[0].clientY
//   // document.documentElement.style.setProperty('--cursorX', x + 'px')
//   // document.documentElement.style.setProperty('--cursorY', y + 'px')
//   let x = e.touches[0].clientX - (document.documentElement.clientWidth * 1.5);
//   let y = e.touches[0].clientY - (document.documentElement.clientHeight * 1.5);
//   setTransform('translate(' + x + 'px, ' + y + 'px)')
// }

//   document.addEventListener('mousemove', update);
//   document.addEventListener('touchmove', update);




// original

// useEffect(() => {
//   document.addEventListener('mousemove', (e) => {
//     let x = e.clientX - (document.documentElement.clientWidth * 1.5);
//     let y = e.clientY - (document.documentElement.clientHeight * 1.5);
//     setTransform('translate(' + x + 'px, ' + y + 'px)')
//   });
//   document.addEventListener('touchmove', (e) => {
//     let x = e.touches[0].clientX - (document.documentElement.clientWidth * 1.5);
//     let y = e.touches[0].clientY - (document.documentElement.clientHeight * 1.65);
//     setTransform('translate(' + x + 'px, ' + y + 'px)')
//   });
// },[])