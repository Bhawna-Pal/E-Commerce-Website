import './index.css'
import './App.css'
import Home from './Components/Home/Home'
import Slider from './Components/Home/Slider'
import Button from './Components/Home/Button'
import UserContextProvider from './Context/ContextProvider'
import Tees from './Components/Tees/Tees'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './Components/Product/Product'


function App() {
 

  return (
    <UserContextProvider>
      {/* <Home/>
      <Slider/>
      <Button/>
      <Tees/> */}

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='tees' element={<Tees/>} />
      </Routes>
      </BrowserRouter>

      <Slider/>
      <Button/>
      <Product/>
    </UserContextProvider>
  )
}

export default App
