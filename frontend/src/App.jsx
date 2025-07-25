import './index.css'
import './App.css'
import Home from './Components/Home'
import Slider from './Components/Slider'
import UserContextProvider from './Context/ContextProvider'

function App() {
 

  return (
    <UserContextProvider>
      <Home/>
      <Slider/>

    </UserContextProvider>
  )
}

export default App
