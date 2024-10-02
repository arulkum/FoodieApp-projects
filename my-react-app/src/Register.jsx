import React, { useContext, useState } from "react";
import { datacontext } from "./Context/Dataprovider";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import './registe.css'

const Register =() =>
    {
        // let[Fullname,setFullname]=useState("");
        // let[username,setusername]=useState("");
        // let[password,setpassword]=useState("");
        let{registeredname,setregisteredinfo}=useContext(datacontext);
        let[registerinfo,setinfo]=useState({
            Fullname:"",
            username:"",
            password:"",
            role:""
        })
        let navigateToScreen = useNavigate();


    //     if(eve.target.id ==="Fullname")
    //     {
    //          console.log(eve.target.value)
    //          setFullname(eve.target.value);
    //         setinfo((pre)=>({...pre,Fullname:eve.target.value}))
    //     }
    //     if(eve.target.id ==="Username")
    //         {
    //             // console.log(eve.target.value)
    //             // setusername(eve.target.value)
    //             setinfo((pre)=>({...pre,username:eve.target.value}))
    //         }
    //     if(eve.target.id ==="Password")
    //         {
    //                 console.log(eve.target.value)
    //                 setpassword(eve.target.value)
    //                 setinfo((pre)=>({...pre,password:eve.target.value}))
    //         }
    //    }
    function handleSubmit(eve)
       {
        setinfo((preval) =>({...preval, [eve.target.id]: eve.target.value}));
       }   
    async function submit()
      {
        console.log(registerinfo);
        let chechup= registeredname.find((item) =>item.registeredname ==registerinfo.username)
        if(chechup)
        {
            alert("alraedy registered")
            navigateToScreen("/login");
        }
        
      if(!chechup)
      {
        setregisteredinfo((prev) =>([...prev,registerinfo]))
        navigateToScreen("/login");   
    } 

      }
     
    console.log(registerinfo.name)
        return (
            <div className="register-form">
             <h2>Register</h2>
             <div className="form-group">
             <label>Full Name:</label>
             <input type="text" id="Fullname" placeholder="Enter The Full Name" onChange={handleSubmit} value={registerinfo.Fullname}></input>
             </div>
            <div className="form-group">
            <label>Username:</label>
             <input type="text" id="username" placeholder="Enter The user Name" onChange={handleSubmit} value={registerinfo.username}></input><br></br> <br></br>
             </div>
            <div className="form-group">
            <label>Password:</label>
             <input type="text" id="password" placeholder="Enter The Password"onChange={handleSubmit} value={registerinfo.password}></input><br></br> 
             </div>
            <div className="form-group">
            <label>Role:</label>
             <select id="role" onChange={handleSubmit}>
             <option value="Admin" id="role">Admin</option>
             <option value="User" id="role">User</option>
             </select>
             </div>
             <div className="form-actions">
             <button onClick={submit} className="btn btn-submit">Submit</button> 
             <button className="btn btn-cancel">cancel</button> 
            </div>
            </div>
        )
    }
    export default Register;