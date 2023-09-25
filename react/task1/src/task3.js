import { useState } from "react";

export function Showdataintable({alldata})
{
    const [query,setquery] = useState();
    return(
        <>
        <button>Search</button>
        <input type="text" value={query} onChange={(e)=>{setquery(e.target.value)}}/>
        <table border="2">
            <tr>
                <th>Name</th>
                <th>User Name</th>
                <th>E-mail</th>
                </tr>
                {alldata.filter((i)=>i.name.includes(query)).map((i)=>(<tr><td>{i.name}</td><td>{i.username}</td><td>{i.email}</td></tr>))}
       </table>
        </>
    )}