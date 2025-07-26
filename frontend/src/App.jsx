import './index.css'
import './App.css'
import Home from './Components/Home'
import Slider from './Components/Slider'
import UserContextProvider from './Context/ContextProvider'
import Button from './Components/Button'

function App() {
 

  return (
    <UserContextProvider>
      <Home/>
      <Slider/>
      <Button/>

    </UserContextProvider>
  )
}

export default App
