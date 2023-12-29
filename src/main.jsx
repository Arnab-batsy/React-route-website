import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/contact.jsx'

//Here, we pass a array of objects that specify the path and the elements to render in that path
//Add children to specify the other routes

const router= createBrowserRouter([
{
  path:"/",
  element: <App/>,
  children: [
    {
      path:"",
      element: <Home/>
    },
{
  path: "about",
  element: <About/>
},
{
  path: "contact",
  element: <Contact/>
}
]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
