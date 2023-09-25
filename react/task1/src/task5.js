import { useEffect, useRef } from "react";
export function Scrolltop_event()
{
    const divelement = useRef();
    function cssapply()
    {
        divelement.current.style.width="300px";
        divelement.current.style.color="black";
        divelement.current.style.backgroundColor="Green";
    }
   useEffect(() => {
    window.onscroll =()=>{    
    if(document.documentElement.scrollTop > 100)
    {
        cssapply();
    }
    else{
        divelement.current.style.height="200px";
        divelement.current.style.width="200px";
        divelement.current.style.color="green";
        divelement.current.style.backgroundColor="red";
    }}
 }, []);

    return(<>
    <div style={{height:"200px",width:"200px", backgroundColor:"red"}} ref={divelement}>hello</div>   
    </>)
}