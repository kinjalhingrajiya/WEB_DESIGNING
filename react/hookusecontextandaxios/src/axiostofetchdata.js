import { useEffect, useState } from "react";
import axios from "axios";
//  to use axios so complesary to install axios library in npm (npm install axios) write this () code in terminal
function Axiosex1() {
    const [data1,setdata1] = useState([])
    useEffect(()=>
    {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{setdata1(res.data)})
    },[data1])
    return(
        <>
          <div>
            <hr/>
        <h1>using AXIOS data fatching</h1>
       
        {data1.map((v,i)=>(
            <>
            <li key={i}>Name:{v.name + "  "} </li>
            <li key={i}>Username:{v.username + "  "}</li>
            <li key={i}>Email:{v.email}</li>
            </>
        ))}
    </div>
        </>
    )
}
export default Axiosex1;