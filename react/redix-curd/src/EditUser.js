import React from 'react'
import { useDispatch } from 'react-redux'

function EditUser() {

    const dispatch = useDispatch();

    const handleClick = (e)=>{
        e.preventDefault();
        dispatch(updateUsers())
    }
  return (
    <div>

        <div className='row justify-content-center text-start'>
            <div className='col-6'>

               

                <form onSubmit={handleClick} className='container my-5'>
                <h4 className='my-2'>Create User</h4>
                    <div className='col-12'>
                        <label className="form-label">ID</label>
                        <input disabled="disabled" className='form-control'></input>
                    </div>

                    <div className='col-12'>
                        <label className="form-label">Name</label>
                        <input value={name} onChange={(e)=>{setName(e.target.value)}} className='form-control'></input>
                    </div>

                    <div className='col-12'>
                        <label className="form-label">Email</label>
                        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='form-control'></input>
                    </div>

                    <div className='col-12 my-3'>
                       <button className='btn btn-success'>Save</button>
                    </div>

                </form>

            </div>

        </div>
      
    </div>
  )
}

export default EditUser