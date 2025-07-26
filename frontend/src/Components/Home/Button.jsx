import React, { useContext } from 'react'
import UserContext from '../../Context/UserContext'

const Button = ({ selectedCategory, setSelectedCategory }) => {
  const { setUser } = useContext(UserContext)
  const categories = ['all', 'jacket', 'hoodie', 'raincoat']

  return (
    <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2'>
      <button 
        onClick={() => setSelectedCategory(categories[selectedCategory === 'all' ? 1 : 0])}
        className='px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-medium transition'
      >
        More
      </button>
    </div>
  )
}

export default Button

