import { useEffect, useState } from 'react';
export default function FetchAPI() {
    const [resource, setresourse] = useState('');
    const [item, setitem] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`).
        then(res => { return res.json() }).
        then(data => setitem(data))
    })
   
    return (
        <>
            <br />
            <button onClick={() => { setresourse("posts") }}>Posts</button>
            <button onClick={() => { setresourse("users") }}>Users</button>
            <button onClick={() => { setresourse("comments") }}>Comments</button>
            <p>{resource}</p>
            {item.map((i1) =>
                <>
                   <tr>
                        <td>{i1.id}</td>
                        <td>{i1.title}</td>
                        <td>{i1.body}</td>
                        <td>{i1.id}</td>
                        <td>{i1.name}</td>
                        <td>{i1.email}</td>
                    </tr>
                </>
            )}
        </>
    )
}




