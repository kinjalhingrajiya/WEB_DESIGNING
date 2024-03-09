import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EmpEdit() {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("")
  const [email, emailchange] = useState("")
  const [phone, phonechange] = useState("")
  const [active, activechange] = useState(false);
  const navigate = useNavigate();
  const { empid } = useParams();
  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        idchange(data.id);
        namechange(data.name);
        emailchange(data.email);
        phonechange(data.phone);
        activechange(data.active);
      }
      )
      .catch((e) => {
        console.log(e.message)
      })
  },[empid])
  const handleclick = (e) => {
    e.preventDefault();
    const empdata = { id, name, email, phone, active };
    console.log(empdata);
    fetch(" http://localhost:8000/employee/" + empid,
      {
        method: "put",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(empdata)
      })
      .then((res) => {
        if (res) {
          alert("updated sucessfully");
          navigate('/');
        }
      })
      .then((data)=>{console.log(data)})
      .catch((e) => { console.log(e.message) })
  }
  return (
    <div className='text-center'>
      <div className='row justify-content-center'>
        <div className='col-6'>
          <h3 className='my-3 ms-2'>Edit Employee</h3>
          <form className='container' onSubmit={handleclick}>

            <div className='col-12'>
              <label className='form-label'>Id : </label>
              <input className="form-control" disabled="disabled" type="text" value={id} /><br></br>
              <label className='form-label'>Name : </label>
              <input type="text" className="form-control" value={name} onChange={(e) => { namechange(e.target.value) }} />
              <br></br>
              <label className='form-label'>Email : </label>
              <input type="text" className="form-control" value={email} onChange={(e) => { emailchange(e.target.value) }} />
              <br></br>
              <label className='form-label'>Phone: </label>
              <input type="text" className="form-control" value={phone} onChange={(e) => { phonechange(e.target.value) }} />
              <br></br>
              <input type="checkbox" className="form-check-input" />{"  "}
              <label className='form-check-label' value={active} onChange={(e) => { activechange(e.target.checked) }}> Is Active</label>

              <br></br>

            </div>
            <div className='col-12 mt-2'>
              <button type="submit" className='btn btn-success m-2'>Save</button>
              <Link to="/" className='btn btn-warning m-2'>Back</Link>
            </div>

          </form>
        </div>
      </div>

    </div>
  )
}

export default EmpEdit
