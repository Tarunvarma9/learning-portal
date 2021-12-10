import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/users_details/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log(users)
  return (
    <>
    <div style={{textAlign:'right', fontSize:'1rem', margin:'30px 3%'}}>
      <Link to='/' style={{textDecoration:'none', color:'#000',padding:'5px 3%', boxShadow:"0 3px 10px rgb(0 0 0 / 0.2)"}}>
      Get back to Dashboard
      </Link>
    </div>
    
    <div style={{padding:'50px 10%'}}>
        <h1>USE_R</h1>
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
               {user.user_name}
           </h2>
           <h6>
             {user.email}  
           </h6>
        </div>
      ))}
    </div>
  </>
  );
}

export default Profile;