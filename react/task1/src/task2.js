import { userdata } from "./user";

export function Showdata()
{
    return(
    <>
    <ul>{userdata.map((i)=>(
    <li key={i.id}>{i.name}</li>
    ))}</ul>
    </>)
}   