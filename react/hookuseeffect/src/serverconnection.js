import { useEffect, useState } from "react"
import Createconnection from "./createconnection";
function Chatroom({roomId})
{
    const[serverUrl,setserverUrl] = useState("http:/localhost/1234");
    useEffect(()=>{
        const connection=Createconnection(roomId,serverUrl);
        connection.connect();
        return()=>
        {
            connection.disconnect();
        }
    },[serverUrl,roomId])
}
export default function Serverconnection()
{

    const [roomId,setroomid] = useState("General");
    const [show,setshow] = useState(false);

    return(<>
    <select name="" id="" value={roomId} onChange={(e)=>{setroomid(e.target.value)}} >
        <option>General</option>
        <option>Music</option>
        <option>Travel</option>
    </select>
    <button onClick={()=>{setshow(!show)}}>
        {
            show ? "CloseChat" : "Showchat"
        }
    </button>
    <Chatroom roomId={roomId}/>
    
    </>)
}