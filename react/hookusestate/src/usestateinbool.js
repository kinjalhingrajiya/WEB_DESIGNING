import { useState } from "react";
import React from "react";
function Usestateinbool()
{
    const [data,setdata] = useState(true);

    function changecheck(e)
    {
        setdata(e.target.checked)
    }
    return(
        <>
       <input type="checkbox" checked={data}

        onChange={changecheck}
        />You Checked this
        <h3>{(data) ? "Hello Checked": "Did not check"}</h3>
        </>
    )
}
 export default Usestateinbool;
