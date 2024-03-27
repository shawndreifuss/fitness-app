import React, { useState} from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import BottomToast, {handleError, handleSuccess} from "../../../components/Toast/BottomToast";

const EmailForm = ({ isOpen, setIsOpen, email, setEmail }) => {
  //  Use the forgotPassword function from context
  const { forgotPassword } = useUser();

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("Password reset successful! Check your email for the reset link.");
  const [error, setError] = useState("Password reset failed! Please try again.");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await forgotPassword(email);
    if (response.success) {
     handleSuccess(message);
     setIsLoading(true);
     setTimeout(() => {
       location.href = "/login";
       setIsLoading(false);
     }, 3000);
   } else {
     handleError(error);
   };
  };
  return (
    <>
    {isLoading ? ( <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-50"></div> ) : (
     <>
     <div className="absolute bottom-0 top-0 right-0 left-0 h-screen w-screen bg-white " />
      <div
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full inset-0 h-modal md:h-full flex"
        aria-hidden="true"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Enter your email
              </h3>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Get reset link
                    </label>
                  </div>
                  <Link
                    to="/register"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create Account
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Reset password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
    )}
      <BottomToast />
    </>
  );
};

export default EmailForm;
