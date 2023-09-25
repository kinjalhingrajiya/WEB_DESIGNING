import React, { useEffect, useRef } from 'react'

export default function Intersectionmethod() {
    const ref = useRef();
    useEffect(()=>{
        const div=ref.current;
       const observer= new IntersectionObserver((enteries) =>{
            const entry=enteries[0];
            if(entry.isIntersecting)
            {
                document.body.style.backgroundColor = "#000";
                document.body.style.color = "#fff";
            }
            else
            {
                document.body.style.backgroundColor = "#fff"
                document.body.style.color = "#000";
            }
           
       },
       {
        threshold:1
    })
       observer.observe(div);
    },[])
  return (
    <div ref={ref} style={{
        height:100,
        width:100,
        background:"blue",
        border:"2px solid #000",
        margin:20
    }}>
      
    </div>
  )
}
