import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, HashRouter } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import About from './Components/About.jsx'
import Home from './Components/Home.jsx'
import Res from './Components/Res.jsx'
import Skills from './Components/Skills.jsx'
import Project from './Components/Project.jsx'
import Proj_htlh from './Components/Proj_htlh.jsx'
import Project_bank from './Components/Project_bank.jsx'
import Blogs from './Components/Blogs.jsx'
const router=createHashRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{
      path:"",
      element:<Home/>
    },
  {
    path:'/About',
    element:<About/>
    },
  {
    path:'/Menu',
    element:<Res/>
  },
  {
    path:'/Skills',
    element:<Skills/>
  },
  {
    path:'/Project',
    element:<Project/>
  },
  {
    path:'/Proj_health',
    element:<Proj_htlh/>
  },
  {
    path:'/Project_bank',
    element:<Project_bank/>
  },
  {
    path:'/Blogs',
    element:<Blogs/>
  }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter basename="portfolio_react">
  <App />
</HashRouter>,
  <React.StrictMode>
 <RouterProvider router={router}/>
  </React.StrictMode>
)
