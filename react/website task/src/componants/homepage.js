import { useState } from "react";
import { Showdataintable } from "./table data";
import userdata from "./user";
import Footer from "./footer";
import Navbar from "./Navbar";
import TaskApp from "./todolist/todo list";
export function Homepage()
{
    const [mode, setmode] = useState('light');
    const togglemode=()=>
    {
     if(mode==='light')
     {
       setmode('dark');
       document.body.style.backgroundColor='black';
       document.body.style.color='white';
 
     }
     else
     {
       setmode('light');
       document.body.style.backgroundColor='white';
       document.body.style.color='black';
     }
    }
    return(
        <>
        <section>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
        </section>
        <section>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", padding:"10px", backgroundColor:"lightpink"}}>
        <div style={{border:"2px solid red", padding:"10px", height:"500px"}}>
        <Showdataintable alldata={userdata}/>
       </div>
       <div style={{border:"2px solid red", height:"500px", padding:"10px"}}>
       <TaskApp/>
       </div>
       </div>
       </section>
       <section>
        <Footer mode={mode} togglemode={togglemode}/>
       </section>
        </>
    )}