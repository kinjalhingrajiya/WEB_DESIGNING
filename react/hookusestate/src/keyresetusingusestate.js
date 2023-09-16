import { useState } from "react"


function Form()
{
    const [name,setname]=useState('');
    return(<>
    <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
    <h1>{name}</h1>
    </>)
}
export default function ResetKey()
{
    const [count,setcount] = useState(0)
    function reset()
    {
            setcount(count+1);
    }
    return(
        <>
        <hr></hr>
        <h1>reset with keys props</h1>
            <button onClick={reset}>Reset</button>
            <Form key={count}/>
        </>
    )
}
