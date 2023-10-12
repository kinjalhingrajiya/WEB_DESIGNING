import React, { useEffect, useState } from "react"

const Apifetch = () => {
  // const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
      })
  }
  fetchUserData();

  // useEffect(() => {
  //   fetchUserData()
  // }, [])

  return (
    <div>
     
        <ul>
          {/* {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))} */}
        </ul>
     
    </div>
  );
}

export default  Apifetch;