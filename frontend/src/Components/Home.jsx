import React, {useContext} from 'react'
import UserContext from '../Context/userContext'

function Home() {

    const {setUser} = useContext(UserContext)

  return (
      //  nav bar
     <nav className='w-full bg-white shadow-md py-3 px-6 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
         <img className='w-10 h-10 object-contain' src="#" alt="Logo" />
      </div>
      <ul className=' hidden md:flex gap-6 text-sm font-semibold text-gray-700'>
        <li className='hover:text-black cursor-pointer'>Tees</li>
        <li className='hover:text-black cursor-pointer'>Jackets</li>
        <li className='hover:text-black cursor-pointer'>Caps</li>
        <li className='hover:text-black cursor-pointer'>Accessories</li>
        <li className='hover:text-black cursor-pointer'>Limited</li>
      </ul>
      <div>
        <button className='bg-blue-600 text-white px-4 py-1 rounded-full font-semibold text-sm hover:bg-blue-950'>
          Login
        </button>
      </div>
     </nav>
     
     
    )
}

export default Home
