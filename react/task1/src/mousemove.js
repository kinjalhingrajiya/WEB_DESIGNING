import { useState } from "react"
export function Mousemove()
{
    const [pos,setpos] = useState({x:0,y:0});
    window.addEventListener("mousemove",(e)=>{
        setpos({x:e.clientX,y:e.clientY})
})
    return(<>
    <div style={{"width":"22px",
     height: "22px",
     borderRadius: "50%",
     backgroundColor: "red",
     position:"absolute",
     top:"0px",
     left:"0px",
     transform:`translate(${pos.x}px, ${pos.y}px)`
    }}>   
    </div>
    </>)
    
}




