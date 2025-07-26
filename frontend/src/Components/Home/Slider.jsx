import React, {useContext} from 'react'
import { useState, useRef, useEffect } from "react"
import UserContext from '../../Context/UserContext'


   
const Slider = () => {
     const {setUser} = useContext(UserContext)
 const [activeIndex, setActiveIndex] = useState(0)
 const carouselRef = useRef(null)

 const items = [
     {
        Title:"Hoodies",
        Description: "Stylish Hoodies for every season.",
        Category:"jacket",
        bannerUrl:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvmbwmwrzaCzlFI6lF97fz37Mc3YTRERePkDi36i0YjpSfqpVT5pCFo0-r1hV28vNHWTV0iWjF22fQQyO7B4p3aZLB9CZiOxVlHouCPMxROpucJ6Tou7g-jA",
        buttonUrl:"#"
    },
    {
        Title:"Leathers",
        Description: "Stylish leather Jackets for every season.",
        Category:"jacket",
        bannerUrl:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSFn4ohq-EgGAqv9nwOexiyjjeHWWFrvpU83ewUksXG7kW7NM-S6EIoa1dEVK3BFlrRiC8-AHGMS1Vclq6We4wh-jeMDUXZ40Ldjte-5yHKfdGMcbbZ_4VSWws",
        buttonUrl:"#"
    },
    {
        Title:"Jackets",
        Description: "Stylish leather Jackets for every season.",
        Category:"jacket",
        bannerUrl:"https://image.uniqlo.com/UQ/ST3/in/imagesgoods/475378/item/ingoods_09_475378_3x4.jpg?width=369",
        buttonUrl:"#"
    },
    {
        Title:"Coat",
        Description: "Stylish leather Jackets for every season.",
        Category:"jacket",
        bannerUrl:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSFn4ohq-EgGAqv9nwOexiyjjeHWWFrvpU83ewUksXG7kW7NM-S6EIoa1dEVK3BFlrRiC8-AHGMS1Vclq6We4wh-jeMDUXZ40Ldjte-5yHKfdGMcbbZ_4VSWws",
        buttonUrl:"#"
    },
    {
        Title:"Rain-Coat",
        Description: "Stylish leather Jackets for every season.",
        Category:"jacket",
        bannerUrl:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSFn4ohq-EgGAqv9nwOexiyjjeHWWFrvpU83ewUksXG7kW7NM-S6EIoa1dEVK3BFlrRiC8-AHGMS1Vclq6We4wh-jeMDUXZ40Ldjte-5yHKfdGMcbbZ_4VSWws",
        buttonUrl:"#"
    }
 ] // Placeholder numbers

 useEffect(() => {
 const handleScroll = () => {
 if (carouselRef.current) {
 const index = Math.round(carouselRef.current.scrollLeft / carouselRef.current.offsetWidth)
 setActiveIndex(index)
 }
 }

 carouselRef.current?.addEventListener("scroll", handleScroll)
 return () => carouselRef.current?.removeEventListener("scroll", handleScroll)
 }, [])

 return (
 <div className="relative h-[700px] w-full overflow-hidden">
 <div
 ref={carouselRef}
 className="flex h-screen w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide disableScrollbar"
 style={{ WebkitOverflowScrolling: "touch", scrollSnapType: "x mandatory" }}
 >
 {items.map((item, index) => (
  <div
    key={index}
    className="flex-shrink-0 h-[700px] w-full snap-start flex items-center justify-center bg-cover bg-center"
    >
      <img src={item.bannerUrl} alt={item.Title} className='max-w-full max-h-full object-contain rounded-xl' />
    <div className=" absolute bottom-40 left-20 bg-black bg-opacity-90 text-white p-6 rounded-2xl max-w-sm">
      <h2 className="text-4xl font-bold mb-2">{items[activeIndex].Title}</h2>
      <p className="mb-4">{items[activeIndex].Description}</p>
      <a
        href={item.buttonUrl}
        className="bg-white text-black px-4 pt-4 py-2 rounded-xl hover:bg-gray-200 transition items-center"
      >
        Shop Now
      </a>
    </div>
  </div>
))}
 </div>
 <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-2">
 {items.map((_, index) => (
 <div
 key={index}
 className={`w-2 h-2 rounded-full transition-all duration-300 ${
 index === activeIndex ? "bg-gray-600 scale-125" : "bg-gray-400"
 }`}
 />
 ))}
 </div>
 </div>
 )
}



export default Slider
