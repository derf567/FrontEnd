import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './pages/Login.jsx'
import './pages/Dashboard.jsx'
import './pages/Reports.jsx'
import './pages/Intramurals.jsx'
import './pages/FacultyPov.jsx'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Reports from './pages/Reports.jsx'
import Intramurals from './pages/Intramurals.jsx'
import FacultyPov from './pages/FacultyPov.jsx'






const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/Reports",
    element: <Reports />,
  },
  {
    path: "/Intramurals",
    element: <Intramurals />,
  },
  {
    path: "/FacultyPov",
    element: <FacultyPov />,
  },


  

  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  
  </React.StrictMode>,
)
