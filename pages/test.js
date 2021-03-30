
import Mouse from '../components/Mouse'
import News from '../components/News'


export default function Test(){
    // const [image, setImage] = useState(null)
    // const { x, y } = useMousePosition();

    const hasMovedCursor = typeof x === "number" && typeof y === "number";
  
    return (
      <div className="App" style={{backgroundColor:"green", height:"auto"}}>

        <section style={{position:"relative", display:"block", width:"100%", height:"auto"}}>
          <Mouse />
        </section>

        <section>
          <News/>
        </section>


        {/* <h1 style={{position:"absolute", bottom:"0px", display:"flex", justifyContent:"center", alignItems:"center"}}>
            hello{`Your cursor is at ${x}, ${y}`}
        </h1> */}
      </div>
    );
}