import { useRef } from "react"

export default function Userefwithstyle()
{
    const inputelement = useRef();
    function cssapply()
    {
        // console.log(inputelement);
        // console.log(inputelement.current);
        inputelement.current.style.width="200px";
        inputelement.current.style.color="red";
        inputelement.current.style.backgroundColor="yellow";
        inputelement.current.style.height="70px";
        inputelement.current.style.fontSize="50px";
        inputelement.current.style.border="2px solid green";
        inputelement.current.focus();
    }
    return(
        <>
        <input type="text" ref={inputelement} />
        <button onClick={cssapply}>APPLY CSS</button>
        </>
    )
}