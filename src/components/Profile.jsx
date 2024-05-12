import UserContext from "../context/UserContext";
import React, {useState, useContext} from "react";

export default function Profile(){

  const {user} = useContext(UserContext);

  if(!user){
    return (
  
      <div className="">
        Please Login !!! 
      </div>
    )

  }

  return (
  
    <div className="">
      Welcom {user.username}
    </div>
  )
}