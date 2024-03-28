import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
// import Google from "./Buttons/Google";
import { Button } from "flowbite-react";
import EmailForm from "./components/EmailForm";
import BottomToast,{handleError, handleSuccess}  from "../../components/Toast/BottomToast";


const Login = () => {

  
  // Use the login function from context
  const { login } = useUser();
  const [ isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Error and Success with toast
  const [message, setMessage] = useState("Login Successful! Welcome to the Fitness App!");
  const [error, setError] = useState("Invalid Credentials! Please try again!");



  // Toggle modal
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Call the login function with email and password
   const response = await login(email, password);
   if (response.success) {
    handleSuccess(message);
    setIsLoading(true);
    setTimeout(() => {
      location.href = "/";
      setIsLoading(false);
    }, 3000);
  } else {
    handleError(error);
  };
  }
  

  return (
    <> 
    
    {/*Reset Password  Modal */}
      {isOpen && (
        <EmailForm
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          email={email}
          setEmail={setEmail}
        />
      )}

      {/* Login Form */}
      { isLoading || !isOpen &&  (
      <div className="flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
        <Link
          to="/"
          className="flex justify-center items-center mb-8 text-2xl font-semibold lg:mb-10"
        >
          {/* Ensure the path to logo.svg is correct */}
          <img src="/imgs/logo.png" className="mr-4 h-10" alt="logo" />
          <span className="self-center text-2xl font-bold whitespace-nowrap">
            Fitness App
          </span>
        </Link>
        {/* Card */}
        <div className="p-10 w-full max-w-lg bg-white rounded-2xl shadow-xl shadow-gray-300">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Sign in to platform
            </h2>
            <div className="grid grid-cols-3 gap-3 mt-6">
              <Link
                to="/apple"
                className="inline-flex justify-center w-full px-5 py-2.5 text-sm font-medium text-[#4267B2] border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M318.7 268.2c-.1-33.6 27.6-49.9 28.8-50.7-15.7-22.9-40.1-26-48.6-26.3-20.7-2.1-40.5 12.2-51.1 12.2-10.5 0-26.7-11.9-44-11.6-22.7.3-43.7 13.2-55.3 33.5-23.5 40.9-5.8 101.4 16.8 134.7 11.1 16.4 24.4 34.8 41.8 34.1 17.3-.7 23.8-11.2 44.7-11.2s26.9 11.2 44.7 11c17.7-.3 29.5-17.2 40.6-33.6 13.8-20.4 19.5-40.1 19.6-40.8-.1-.1-22.1-8.5-22.2-41.8zM252.2 81.4c10.1-12.2 16.9-29.2 15-46.4-14.5 1-31.9 9.7-42.3 21.9-9.1 10.6-17 27.6-14.9 43.8 15.7 1.2 32 .7 42.2-19.3z"
                  />
                </svg>{" "}
              </Link>
              {/* <Google /> */}
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    name="remember"
                    type="checkbox"
                    className="w-5 h-5  rounded border-gray-300 focus:outline-none focus:ring-0 checked:bg-dark-900"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="font-medium text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <Button
                  onClick={toggleModal}
                  className="ml-auto text-sm text-fuchsia-600 hover:underline"
                >
                  Forgot Password?
                </Button>
              </div>
              <button
                type="submit"
                className="py-3 px-5 w-full text-base font-medium text-center text-white bg-gradient-to-br from-pink-500 to-voilet-500 hover:scale-[1.02] shadow-md shadow-gray-300 transition-transform rounded-lg sm:w-auto"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-gray-500">
                Not registered?{" "}
                <Link
                  to="/register"
                  className="text-fuchsia-600 hover:underline"
                >
                  Create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      )}
       <BottomToast message={message} error={error}/>
    </>
  );
};

export default Login;
