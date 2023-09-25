import React, { useEffect, useRef } from 'react'

function Modalbox({isopen,children}) {
    const ele = useRef();
    useEffect(()=>{
        if(!isopen)
        {
            return;
        }
        else
        {
            const dialog = ele.current;
            dialog.showModal();
            return()=>{dialog.close()} ;
        }
    },[isopen])
  return (
    <dialog ref={ele}>
      {children}
    </dialog>
  )
}

export default Modalbox;
