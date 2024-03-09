import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function EmpView() {
    const {empid} = useParams();
    const [empdata,setempdata]=useState("");
    
    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+empid)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
          // console.log(data)
          setempdata(data)
        }
        )
        .catch((e)=>{
            console.log(e.message)
        })
    })
  return (
    <div>
      <table className='table' border="1">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Phone</th>
          <th>Active</th>
        </tr>
        <td>{empdata.id}</td>
      <td>{empdata.name}</td>
      <td>{empdata.email}</td>
      <td>{empdata.phone}</td>
      <td>{(true) ? "Active" : "Not Active"}</td>
      </table>
    </div>
  )
}

export default EmpView
