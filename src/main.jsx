

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




import Roots from './Componants/Roots';
import Home from './Componants/Home';
import About from './Componants/About';

import Contact from './Componants/Contact';
import Skills from './Componants/Skills';
import Service from './Componants/Service';

import Education from './Componants/Education';



const router = createBrowserRouter([
  {
    path: "/",
 element:<Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      
      {
        path:'/education',
        element:<Education></Education>
      },
      
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      
      {
        path:'/skils',
        element:<Skills></Skills>
      },
      
      {
        path:'/service',
        element:<Service></Service>
      },
     
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
      <RouterProvider router={router} />
    
  </React.StrictMode>,
)