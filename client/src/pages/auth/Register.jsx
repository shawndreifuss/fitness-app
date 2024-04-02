import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import BottomToast, {
  handleError,
  handleSuccess,
} from "../../components/Toast/BottomToast";
// import Google from "./Buttons/Google";

const Register = () => {
  // Use the register function from context
  const { register } = useUser();
  // State variables for the form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  // Handle Error and Success with toast
  const [message, setMessage] = useState("Hi! Welcome to the Fitness App!");
  const [error, setError] = useState("Invalid Credentials! Please try again!");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await register(email, password);
    if (response.success) {
      handleSuccess(message);
      setIsLoading(true);
      setTimeout(() => {
        location.href = "/profile";
        setIsLoading(false);
      }, 3000);
    } else {
      handleError(error);
    };
    }

    

  return (
    <>
      {!isLoading && (
        <div className="flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
          <Link
            to="/"
            className="flex justify-center items-center mb-8 text-2xl font-semibold lg:mb-10"
          >
            <img src="/imgs/logo.png" className="mr-4 h-10" alt="Logo" />
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              Fitness App
            </span>
          </Link>
          <div className="p-10 w-full max-w-lg bg-white rounded-2xl shadow-xl shadow-gray-300">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Create a Free Account
              </h2>
              <div className="grid grid-cols-3 gap-3 mt-6">
                {/* Social media sign-up buttons */}
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
                    id="email"
                    className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                    placeholder="••••••••"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="w-5 h-5 rounded border-gray-300 focus:ring-3 focus:ring-fuchsia-500"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-medium text-gray-900"
                    >
                      I accept the{" "}
                      <a href="#" className="text-fuchsia-500 hover:underline">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-base font-medium text-center text-white bg-gradient-to-br from-pink-500 to-violet-500 hover:scale-[1.02] shadow-md shadow-gray-300 transition-transform rounded-lg"
                >
                  Create account
                </button>
                <div className="text-sm font-medium text-gray-500">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-fuchsia-500 hover:underline"
                  >
                    Login here
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <BottomToast message={message} error={error} />
    </>
  );
};

export default Register;
