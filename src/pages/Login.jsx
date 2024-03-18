import './Login.css';
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useState } from 'react'
import  back from './img/back.jpg';
import  userr from './img/userr.png';
import {useNavigate} from 'react-router-dom';






function Login() {

  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [valuePass, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [valueName, setName] = useState('');
  const [valueEmail, setEmail] = useState('');


  const handleloginClick = () => {
      if (!value || !valuePass) {
          setErrorMessage('Invalid username and password');
      } else {
          // Implement your login logic here
          // For example, navigate to the Dashboard if credentials are valid
          navigate('/Dashboard');
      }
  };
    const items = [
        {
            label: <div className='navbar-text'>Home </div>,
            icon: 'pi pi-fw pi-file',
            
        },
        {
          label: <div className='navbar-text'>Overview </div>,
            icon: 'pi pi-fw pi-pencil',
           
        },
        {
          label: <div className='navbar-text-uic'><b>UIC </b> </div>,
            
        },
        {
          label: <div className='navbar-text'>Equipments </div>,
            icon: 'pi pi-fw pi-calendar',
            
        },
        {
          label: <div className='navbar-text'>Contact </div>,
            icon: 'pi pi-fw pi-power-off'
        }
    ];


    

  
      
    return (
      <>
          <img className='back' src={back} alt="" />
          <div className="center-container"></div>
          <div className="app-container1">
              <div class="background-container"></div>
              <div className="Id-box">
                  <span className="p-float-label">
                      <InputText className="inside-box" value={value} onChange={(e) => setValue(e.target.value)} />
                      <label id="username">ID Number</label>
                  </span>
              </div>
              <div className="password-box">
                  <span className="p-float-label">
                      <Password className="inside-password" value={valuePass} onChange={(e) => setPass(e.target.value)} />
                      <label id="password">Password</label>
                  </span>
              </div>
              <Button onClick={handleloginClick} id='login-button' label="Login" severity="help" box style={{ backgroundColor: '#D2334C', borderColor: '#D2334C' }} />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
      </>
  );
}
export default Login
