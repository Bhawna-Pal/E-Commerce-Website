import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../../Context/UserContext'
import Slider from '../Home/Slider'

const Product = () => {

    const {setUser} = useContext(UserContext)

    // const location = useLocation()
    const [products, setProducts] = useState([])
    const [filterProduct, setFilterProduct] = useState([]) 
    const [search, setSearch] = useState('all')

     const items = [
    { value: 'all', label: 'All' },
    { value: 'jackets', label: 'Jackets' },
    { value: 'hoodies', label: 'Hoodies' },
    { value: 'raincoats', label: 'Raincoats' },
  ]

   const Api = 'https://mocki.io/v1/51c1ce38-d352-42fd-8fa6-7e59a44f4f89'

   useEffect(() => {
    const ftechProducts = async () => {
        let apiUrl = ''

        switch(Api) {
            case 'jackets':
            apiUrl = 'https://api.example.com/jackets'
        }

        const data = await fetch(apiUrl).then(res => res.json())
        setProducts(data)
        setFilterProduct(data)
    }
    ftechProducts()
   }, [Api])

     const handleFilter = (item) => {
        setSearch(item)
        if(item === 'all') {
            setFilterProduct(products)
        } else {
            const filter = products.filter(product => product.item === item)
            setFilterProduct(filter)
        }
     }

    return (
    <div>
        <div>
            {items.map((item, index) => 
            <div
            key={item.value}
            onClick={() => handleFilter(item)}
            className={`px-4 py-2 rounded capitalize text-sm font-medium transition ${search === item ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}>
            
            {item}
            </div>
            )}
        </div>
        {/* <div>
            {filterProduct.map(product => (
               <div key={product.id} className='border rounded-lg p-4 shadow'>
                <img src="" alt="" />
               </div>

            ))}
        </div> */}
    </div>
  )
}

export default Product
