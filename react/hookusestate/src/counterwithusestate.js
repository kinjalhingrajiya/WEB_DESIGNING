import React, { useState } from 'react';
export default function Counter()
{
    const [count,setcount] = useState(0);
    const [count1,setcount1] = useState(100);

    let handlecount = ()=>
    {
        setcount(count+1);
    }
    let decrementcount = ()=>
    {
        setcount1(count1-1);
    }
    return(
       <>
        <h1>{count}</h1>
        <button onClick={handlecount}>Increment</button>
        <h1>{count1}</h1>
        <button onClick={decrementcount}>Decrement</button>
        </> 
    );
}
