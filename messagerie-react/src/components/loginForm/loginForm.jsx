import { useState } from "react";
import style from './loginForm.module.css'



const LoginForm = ({onData}) => {

  const [login, setLogin] = useState(""); 
  const [error, setError] = useState(false);
  
  
  const HandleSubmit = (e) => {
    e.preventDefault();
    
    onData(login)
    
    
    if(e.target.value !== ''){
      // console.log(login)
    }
    setLogin('');
    setError(false);


  }


  return (
    <>
      <div>
          <form onSubmit={HandleSubmit}>
              <label htmlFor="username"> Utilisateur : </label>
              <input id="username" value={login}  type="text"  onChange={(e) => setLogin(e.target.value)} required/>
              <button type="submit"> Se Connecter </button>
          </form>
      </div>
    
    </>

  )




}
export default LoginForm;