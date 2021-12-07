import React, { useEffect, useState } from "react";

function Profile() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log(users)
  const filtered_data = users.filter((us)=>{
      return us.id !== 1;
  })
  console.log(filtered_data)
  return (
    <div style={{padding:'50px 10%'}}>
        <h1>Sample USERS</h1>
      {users.map((user) =>
       (
        <div key={user.id} style={{boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)', padding:"20px 5%"}}>
           <h6>
               {user.name}
           </h6>
           <p>
               {user.id}
           </p>
           <h2>
               {user.username}
           </h2>
           <h6>
             {user.email}  
           </h6>
        </div>
      ))}
    </div>
  );
}

export default Profile;
