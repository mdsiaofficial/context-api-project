import UserContext from "../context/UserContext";
import React, {useState, useContext} from "react";

export default function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setUser({username, password});
  }
  return (

    <div className="">
      <h2>Login</h2>
      <input type="text" value={username} placeholder="username" onChange={(e)=> setUsername(e.target.value)}/>
      <input type="password" value={password} placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>

      <button onClick={handleSubmit}></button>
    </div>
  )
}