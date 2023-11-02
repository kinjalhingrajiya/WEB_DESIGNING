import React, { useEffect, useRef, useState } from 'react'

import gsap from 'gsap';

const data = [
    {title:"Title 1",subtitle:"Subtitle 1"},
    {title:"Title 2",subtitle:"Subtitle 2"},
    {title:"Title 3",subtitle:"Subtitle 3"}
]
 
function ScollEffect() {

    const [bg,setBg] = useState("blue");

    const headerRef = useRef();
const mainref = useRef();
    const ToggleMode = ()=>{

       const bgColor =  (bg=="blue")? "coral": "blue"
        setBg(bgColor)
    }

    useEffect(()=>{

        gsap.to(headerRef.current,{
            background:bg,
            transition:"2s"
        })
        // gsap.to(mainref.current,{
        //     background:"red",
        //     fontSize:"30px"
        // })
    })
    const btnclick =()=>
    {
        gsap.to(mainref.current,{
            color:"green",
            transform:"rotate(10deg)"
        })
    }


  return (
    <div className='App'>

        <header ref={headerRef}>
            <img src='https://img.freepik.com/premium-vector/cute-cartoon-robot-character-mascot-logo_8169-299.jpg' height={100}/>

            <button onClick={ToggleMode}>ToggleMode</button>

            <p>
                Scroll down to see revealing effect
            </p>
        </header>

       <main ref={mainref}>
            {data.map((v)=>{
                
                return(
                    <div >
                <h2><b>{v.title}</b></h2>
                <p><b>{v.subtitle}</b></p>
            </div>
                )

            })}
            </main>
            <button onClick={btnclick}>Click</button>


      
    </div>
  )
}

export default ScollEffect

