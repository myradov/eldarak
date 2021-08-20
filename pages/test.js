import {useState, useEffect} from 'react'
// import Mouse from '../components/Mouse'
import News from '../components/News'
import styles from '../styles/About.module.css'


export default function Test(){
    const [color, setColor] = useState('purple')
    const [height, setHeight] = useState('400px')
    const [width, setWidth] = useState('100%')

    const handleScroll = (e) => {
      const el = document.getElementById("h2")
      if(window.scrollY > 60) {
        setColor('green')
        setHeight('200px')
        setWidth('400px')
        console.log(window.pageYOffset)
      } else {
        setColor(color)
        setHeight(height)
        setWidth(width)
      }
    }

    const handleScrollTop = () => {
        window.scrollTo(0,0)
        console.log('top')
    }
 

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    // useEffect(() => {
    //   window.addEventListener('scroll', (e) => {
    //     if(window.scrollY > 200){
    //       window.scrollTo(0,0)
    //     }
    //   })
    // })

    const hasMovedCursor = typeof x === "number" && typeof y === "number";
  
    return (
      <div className="App" style={{backgroundColor:"green", height:"auto"}}>

        <section style={{position:"relative", display:"block", width:"100%", height:"600px", backgroundColor:"#eaeaea", color:"black", paddingTop:"100px"}}>
          {/* <Mouse /> */}
          <h2 id="h2" className={styles.testScroll} style={{color, height, width}}>Scroll Width</h2>

        </section>
        <button onClick={handleScrollTop}>Scroll Top</button>

        <section>
          <News/>
        </section>


        {/* <h1 style={{position:"absolute", bottom:"0px", display:"flex", justifyContent:"center", alignItems:"center"}}>
            hello{`Your cursor is at ${x}, ${y}`}
        </h1> */}
      </div>
    );
}