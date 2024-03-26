import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
   <>
    <div className="relative flex h-screen content-center items-center justify-center pt-16  ">
        <div className="fixed top-0 z-[-2] h-screen w-full bg-[url('/imgs/bg-hero.webp')] bg-cover bg-center opacity-75" />
        <div className="flex flex-col items-center justify-center h-[75%] w-[75%] p-8 rounded-xl backdrop-blur-sm bg-white/60">
        
      <div className="text-center">
        <h1 className="text-7xl font-bold text-blue-900 mb-6">
          FitoftheFuture
        </h1>
        <h2 className="text-3xl text-blue-800 mb-10">
        Future Fitness, Simplified.
        </h2>
        <p className="text-black w-50%">
        Designed to simplify your journey towards a healthier tomorrow, 
        </p>
        <p>
        it brings the future of fitness into the palm of your hand.
         </p>
         <p className='mb-10'>
        With adaptive workouts, simplified nutrition, and a store to get your perfect supplements!
       </p>
        <Link to="/login">
        <button className="bg-white py-2 px-4 rounded-full shadow-md hover:bg-blue-100 cursor-pointer">
          Get Started
        </button>
        </Link>
      </div>
    </div>
      </div>
      

   </>
  )
}

export default Hero