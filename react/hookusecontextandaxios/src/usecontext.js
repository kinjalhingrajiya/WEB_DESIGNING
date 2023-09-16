import React, { createContext } from 'react';
import ParentCompo from './parentcomponant'
export const LoginContext = createContext();
const UseContext = () => {

    const data = [
        {name:"Kinjal"},
        {name:"Yagnesh"},
        {name:"Bhavesh"}
    ]
return (

    <LoginContext.Provider value={data}>
         <div>
              <ParentCompo/>
         </div>

    </LoginContext.Provider>
   
  )
}

export default UseContext;