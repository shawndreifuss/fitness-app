import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
      <Link to="/" className="flex justify-center items-center mb-8 text-2xl font-semibold lg:mb-10">
        {/* Ensure the path to logo.svg is correct */}
        <img src="/imgs/logo.png" className="mr-4 h-10" alt="logo" />
        <span className="self-center text-2xl font-bold whitespace-nowrap">Fitness App</span>
      </Link>
      {/* Card */}
    <div className="p-10 w-full max-w-lg bg-white rounded-2xl shadow-xl shadow-gray-300">
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
                Sign in to platform
            </h2>
            <div className="grid grid-cols-3 gap-3 mt-6">
                <Link to='/apple' className="inline-flex justify-center w-full px-5 py-2.5 text-sm font-medium text-[#4267B2] border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50">
                <svg className="w-5 h-5" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path fill="currentColor" d="M318.7 268.2c-.1-33.6 27.6-49.9 28.8-50.7-15.7-22.9-40.1-26-48.6-26.3-20.7-2.1-40.5 12.2-51.1 12.2-10.5 0-26.7-11.9-44-11.6-22.7.3-43.7 13.2-55.3 33.5-23.5 40.9-5.8 101.4 16.8 134.7 11.1 16.4 24.4 34.8 41.8 34.1 17.3-.7 23.8-11.2 44.7-11.2s26.9 11.2 44.7 11c17.7-.3 29.5-17.2 40.6-33.6 13.8-20.4 19.5-40.1 19.6-40.8-.1-.1-22.1-8.5-22.2-41.8zM252.2 81.4c10.1-12.2 16.9-29.2 15-46.4-14.5 1-31.9 9.7-42.3 21.9-9.1 10.6-17 27.6-14.9 43.8 15.7 1.2 32 .7 42.2-19.3z"/>
</svg>     </Link>
                <Link to='/google' className="inline-flex justify-center w-full px-5 py-2.5 text-sm font-medium text-[#DB4437] border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50">
                    <svg className="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                </Link>
                <Link to='/something' className="inline-flex justify-center w-full px-5 py-2.5 text-sm font-medium text-[#00acee] border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50">
                    <svg className="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg>
                </Link> 
            </div>
            <form className="mt-8 space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" name="email" id="email" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="name@company.com" required/>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" required/>
                </div>
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-5 h-5  rounded border-gray-300 focus:outline-none focus:ring-0 checked:bg-dark-900" required/>
                    </div>
                    <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="font-medium text-gray-900">Remember me</label>
                    </div>
                    <Link to="forgot-password" className="ml-auto text-sm text-fuchsia-600 hover:underline">Forgot Password?</Link>
                </div>
                <button type="submit" className="py-3 px-5 w-full text-base font-medium text-center text-white bg-gradient-to-br from-pink-500 to-voilet-500 hover:scale-[1.02] shadow-md shadow-gray-300 transition-transform rounded-lg sm:w-auto">Login to your account</button>
                <div className="text-sm font-medium text-gray-500">
                    Not registered? <Link to="/register" className="text-fuchsia-600 hover:underline">Create account</Link>
                </div>
            </form>
        </div>
    </div>

    </div>

    </>

  )
}

export default Login