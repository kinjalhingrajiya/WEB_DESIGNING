import React, { useContext } from 'react';
import { LoginContext } from './usecontext';


 function PostCompo() {


    const userData = useContext(LoginContext)


  return (
    <div>
        <h1>Use Context</h1>
        <h2><u>
            {userData.map((v,i)=>(
                <li key={i}>{v.name}</li>
            ))}
            
            </u>
            </h2>
            <hr/>
        </div>
  )
}

export default PostCompo;