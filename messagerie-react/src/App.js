import logo from './logo.svg';
// import './App.css';
import Header from './containers/header';
import style from './containers/header.module.css'
import LoginForm from './components/loginForm/loginForm';
import { useState } from 'react';
import DisplayMessage from './components/displayMessage/displayMessage';
import Message from './components/message/message';


function App() {
  
  
  
  
  const [userLogin, setUserLogin] = useState('');
  const [displayMessage, setDisplayMessage ] = useState(false);

  
  const handleLogin = (login) => {
    
      console.log("app:>> " + login)
      
      setUserLogin(login)
    
  }

  const HandleMessage = () => {
    setDisplayMessage(true)
  }


return (
  <div className="App">
    <Header />
    {!userLogin && <LoginForm onData={handleLogin} />}
    {userLogin && !displayMessage && <DisplayMessage  data={userLogin} miaou={HandleMessage} />}
    {displayMessage && <Message data={userLogin} />}
  </div>
);


}

export default App;
