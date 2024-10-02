import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { datacontext } from "./Context/Dataprovider";
import { useContext } from "react";
const Login =() =>
{
        let[loggedUsername,setloggedinfo]=useState({
            username:"",
            password:"",
        })
        let { registeredname} = useContext(datacontext);
        let navigateToScreen = useNavigate();

    function handleSubmit(eve)
       {
        setloggedinfo((preval) =>({...preval, [eve.target.id]: eve.target.value}));
       }   
     function submit()
      {
        console.log(loggedUsername);
        let chechup= registeredname.find((item) =>item.username === loggedUsername.username && item.password ==loggedUsername.password)
        console.log(chechup)
        if(chechup)
        {
            alert("Login Successfully")
            navigateToScreen("/home");
        }
        else{
            alert("UserName and Password is Wrong so register again")
        }
    }

  function regis()
  {
   navigateToScreen('/register')
  }
return (
    <div style={styles.formContainer}>
      <form style={styles.form}>
              <h1>LoginForm</h1>
             <input type="text" id="username" style={styles.inputField} placeholder="Enter The user Name" onChange={handleSubmit} value={loggedUsername.username}></input><br></br> <br></br>
             <input type="text" id="password" style={styles.inputField} placeholder="Enter The Password"onChange={handleSubmit} value={loggedUsername.password}></input><br></br> 
             <br></br>
             <button onClick={submit} style={styles.submitButton}>LOG-IN</button><br></br> 
             <button style={styles.cancelButton} onClick={regis}>REGISTER</button> 
            </form>
            </div>
        )

}
const styles = {
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      width: '300px',
    },
    inputField: {
      marginBottom: '15px',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    submitButton: {
      padding: '10px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    cancelButton: {
        padding: '10px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
      },
    submitButtonHover: {
      backgroundColor: '#0056b3',
    },
  };
  
    
    
export default Login;