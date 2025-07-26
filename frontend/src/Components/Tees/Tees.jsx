import React, {useContext} from 'react'
import UserContext from '../../Context/userContext'

function Tees() {
     const { setUser } = useContext(UserContext)
  return (
    <div>
      Hello Tees
    </div>
  )
}

export default Tees
