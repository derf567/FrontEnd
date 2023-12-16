import './Report.css';
import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard.jsx'; 

function Reports(){
    const navigate = useNavigate();

    const handleDashboardClick = () => {
      // Navigate to the Dashboard page
      navigate('/Dashboard');
    };
return(
<>
<button onClick={handleDashboardClick}>Go to Dashboard</button>

<p>micah</p>

</>

)
}export default Reports