import React from 'react'
import TrendingCard from './Cards/TrendingCard'
import SubscribeCard from './Cards/SubscribeCard'

const sidebarStyle = {
    position: 'sticky', // Make sidebar sticky
    top: '20px', // Distance from the top of the viewport
    height: '100vh', // Full height
    width: '200px', // Set a width
    backgroundColor: '#f0f0f0', // Background color
    padding: '20px', // Padding inside the sidebar
    overflowY: 'auto' // Enable scrolling inside the sidebar if content overflows
  };

const Sidebar = () => {
  return (
    <>
    <div className='sticky top-20 overflow-y'>
   <SubscribeCard/>
                 <TrendingCard/>
                 {/* Ad Banner */}
          
                 
                    <img
                      src="http://127.0.0.1:5501/assets/images/blog/bannder-ad.png"
                      alt="image"
                      class="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
                    />
  
</div>
</>


  )
}

export default Sidebar