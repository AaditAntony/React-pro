import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Products } from './components/Pages/Products.jsx'
import { About } from './components/Pages/About.jsx'
import {Newproducts} from './components/Pages/Newproducts.jsx'
import { Contact } from './components/Pages/Contact.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'



const router=createBrowserRouter([
  {path: '/',element:<App/>},
  {path:'/products',element:<Newproducts/>},
  {path:'/about',element:<About/>},
  {path:'/contact',element:<Contact/>}

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
<RouterProvider router={router}/>
  </StrictMode>,
)
