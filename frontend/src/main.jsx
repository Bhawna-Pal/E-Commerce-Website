import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Tees from './Components/Tees/Tees.jsx'
import Jackets from './Components/Jackets/Jackets'
import Caps from './Components/Caps/Caps.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
     <Route Path='' element={Home}/>
     <Route Path='/tees' element={Tees}/>
     <Route Path='jackets' element={Jackets}/>
     <Route Path='caps' element={Caps}/>
     <Route Path='accessories' element={Caps}/>
     <Route Path='limited' element={Caps}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
