import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './pages/Login.jsx'
import './pages/Dashboard.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'






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

  

  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  
  </React.StrictMode>,
)
