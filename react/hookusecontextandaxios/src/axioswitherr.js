import React, { useEffect, useState } from 'react';

import axios from './axios2';

const AxiosEx2 = () => {


    const [data,setData] = useState([]);
    const [err,setErr] = useState("");

    useEffect(()=>{
        GetData();

    },[data]);


    async function GetData()
    {
       try {
        const response = await axios.get('/comments');
        setData(response.data)
        
       } catch (error) {

        setErr(error.message)
        
       }
    }
  return (
    <div>
        <hr/>
        <h1>Hello AXIOS</h1>
        <b>{err}</b>
        {data.map((v,i)=>(
             <>
             <li key={i}>id:{v.id + "  "} </li>
             <li key={i}>name:{v.name + "  "}</li>
             <li key={i}>Email:{v.email}</li>
             </>
        ))}
    </div>
  )
}

export default AxiosEx2;