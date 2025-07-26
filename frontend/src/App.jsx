import './index.css'
import './App.css'
import Home from './Components/Home/Home'
import Slider from './Components/Home/Slider'

import Button from './Components/Home/Button'
import UserContextProvider from './Context/ContextProvider'
import Tees from './Components/Tees/Tees'


function App() {
 

  return (
    <UserContextProvider>
      <Home/>
      <Slider/>
      <Button/>
      <Tees/>

    </UserContextProvider>
  )
}

export default App
