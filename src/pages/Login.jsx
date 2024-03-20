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
  const [attemptCount, setAttemptCount] = useState(0);


    const handleloginClick = () => {
        // Get the username and password values from your input fields
        const username = value.trim(); // Use the state value instead of directly accessing DOM
        const password = valuePass.trim(); // Use the state value instead of directly accessing DOM
        setAttemptCount(prevCount => prevCount + 1);


        if (attemptCount >= 5) {
            setErrorMessage('Maximum attempts reached. Please try again later.');
            return;
          }
        // Check for different scenarios
        if (username === "" || password === "") {
            setErrorMessage('Please fill in all fields');
        } else if (username === "123" && password === "123") {
            // If the username and password are correct, navigate to the dashboard
            navigate('/dashboard');
        } else if (username.toLowerCase() === "@123" && password === "@123") {
            // If the username and password are correct (case-insensitive), show an error message
            setErrorMessage('ID and password are case sensitive. Please enter correct values.');
        } else {
            // If the username and password are incorrect and attempt count is less than 5, show an error message
            if (attemptCount < 5) {
              setErrorMessage('Invalid ID or password');
            } else {
              // If the attempt count exceeds 5, show a maximum attempt error message
              setErrorMessage('Maximum attempts reached. Please try again later.');
            }
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
