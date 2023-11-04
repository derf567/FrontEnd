import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './pages/Login.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.jsx'






const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />,
  },

  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  
  </React.StrictMode>,
)
