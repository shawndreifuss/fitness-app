import React from 'react'
import TrendingCard from './Cards/TrendingCard'
import SubscribeCard from './Cards/SubscribeCard'


const Sidebar = () => {
  return (
    <>
   <SubscribeCard/>
                 <TrendingCard/>
                 {/* Ad Banner */}
          
                 
                    <img
                      src="/img/food.webp"
                      alt="image"
                      className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
                    />
  
</>


  )
}

export default Sidebar