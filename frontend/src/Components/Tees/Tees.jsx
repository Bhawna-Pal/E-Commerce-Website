import React, {useContext} from 'react'
import UserContext from '../../Context/UserContext'

function Tees() {
     const { setUser } = useContext(UserContext)
  return (
    <div>
      Hello Tees
    </div>
  )
}

export default Tees
