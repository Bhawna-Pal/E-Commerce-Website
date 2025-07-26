import './index.css'
import './App.css'
import Home from './Components/Home/Home'
import Slider from './Components/Home/Slider'
import Button from './Components/Home/Button'
import UserContextProvider from './Context/ContextProvider'
import Tees from './Components/Tees/Tees'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


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
        <Route path='/' element={<Tees/>} />
      </Routes>
      </BrowserRouter>

    </UserContextProvider>
  )
}

export default App
