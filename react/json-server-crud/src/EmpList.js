import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function EmpList() {
  const [empdata, setempdata] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => { return (res.json()) })
      .then((data) => { setempdata(data) })
      .catch((err) => { console.log(err.message) })

  }, []
  )
  const LoadView = (id) => {
    console.log(id);
    navigate('view/' + id);

  }
  const LoadEdit = (id) => {
    console.log(id);
    navigate('edit/' + id);

  }
  const LoadDelete = (id) => {
    console.log(id);
    if (window.confirm("Are You Sure?")) {
     
      fetch(" http://localhost:8000/employee/" + id,
      {
        method: "delete",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(empdata)
      })
      .then((res) => {
        if (res) {
          alert("Deleted sucessfully");
          // navigate('/');
          window.location.reload();
        }
      })
  
    }
  }
  return (
    <div className='container text-center'>
      <h2 className='text-center mt-5'>Employee</h2>
      <Link to='/create' className='btn btn-warning m-3'>Add New (+)</Link>
      <table className='table m-auto '>
        <thead>
          <tr className='bg-dark text-white p-3'><td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
          {
            empdata && empdata.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <button className='btn btn-success m-2' onClick={() => { LoadEdit(item.id) }}>Edit</button>
                  <button className='btn btn-danger m-2' onClick={()=>{LoadDelete(item.id)}}>Delete</button>
                  <button onClick={() => { LoadView(item.id) }} className='btn btn-info m-2'>View</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}
