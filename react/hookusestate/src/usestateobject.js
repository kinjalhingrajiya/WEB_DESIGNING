import { useState } from "react";
import React from "react";

function Objwithusestate()
{
    let [person, setperson] = useState({
        fname :"kinjal",
        lname:"patel"
    })
    return(
        <>
        First Name : <input type="text" value={person.fname} onChange={(e)=>{setperson(
            {
                ...person,
                fname:e.target.value
            }
        )}}/><br />
        Last Name:<input type="text"  onBlur={(e)=>{setperson(
            {
                ...person,
                lname:e.target.value
            }
        )}}/>
            <h1>{person.fname}</h1>
            <h1>{person.lname}</h1>
        </>
    )
}
 export default Objwithusestate;
