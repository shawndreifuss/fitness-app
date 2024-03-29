import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

// Dropdown components
import NavbarDropdown from "../Dropdowns/NavbarDropdown";
import NotificationDropDown from "../Dropdowns/NotificationDropdown";
import SearchModal from "../Search/SearchModal";
import ProfileDropdown from "../Dropdowns/ProfileDropdown";
import NavigationDropdown from "../Dropdowns/NavigationDropdown";

const Navbar = () => {

  const { user } = useUser();
  

  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <>
      <header>
        <nav className="fixed left-0 top-0 right-0 z-40 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 py-3 px-4">
          <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
            <div className="flex justify-start items-center">
              <Link to="/" className="flex mr-14">
                <img src="/imgs/logo.png" className="mr-3 h-8" alt="Logo" />
                <span className="self-center hidden sm:flex text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Fitness App
                </span>
              </Link>
              {/* <!-- Desktop menu --> */}
              <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                <ul className="flex flex-col mt-4 space-x-6 text-sm font-medium lg:flex-row xl:space-x-8 lg:mt-0">
                  <li>
                    <Link
                      to="/"
                      className="block rounded text-primary-700 dark:text-primary-500"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  {user && (
                    <li>
                      <Link
                        to="/profile"
                        className="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white"
                      >
                        My Profile
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link
                      to="/workouts"
                      className="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white"
                    >
                      Workouts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/nutrition"
                      className="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white"
                    >
                      Nutrition
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop"
                      className="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white"
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <NavbarDropdown />
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center lg:order-2">
              {/* Search Modal Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchModalOpen(true);
                }}
                type="button"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
              <div
                id="tooltip-toggle"
                role="tooltip"
                className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
              >
                Search Modal
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              {user ? (
                <>
                  <NotificationDropDown align="right" user={user} />
                  <NavigationDropdown align="right" user={user} />
                  <ProfileDropdown align="right" user={user} />
                </>
              ) : (
                <>
                  <NavigationDropdown align="right" />
                  <Link to="/login">
                    <button className="bg-white py-2 px-4 rounded-full shadow-md hover:bg-blue-100 cursor-pointer">
                      Get Started
                    </button>
                  </Link>
                </>
              )}

              {/* Mobile Menu */}
              <button
                type="button"
                aria-expanded={toggleMobileMenu}
                onClick={(e) => {
                  e.stopPropagation();
                  setToggleMobileMenu(!toggleMobileMenu);
                }}
                id="toggleMobileMenuButton"
                data-collapse-toggle="toggleMobileMenu"
                className="items-center p-2 text-gray-500 rounded-lg md:ml-2 lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="w-6 h-6"
                  focusable="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <nav className="bg-white dark:bg-gray-900">
          {/* <!-- Mobile menu --> */}
          {toggleMobileMenu && (
            <ul
              id="toggleMobileMenu"
              className=" flex-col mt-0 pt-16 w-full text-sm font-medium lg:hidden"
            >
              <li className="block border-b dark:border-gray-700">
                <Link
                  to="/"
                  className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="block border-b dark:border-gray-700">
                <Link
                  to="/profile"
                  className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                >
                  Profile
                </Link>
              </li>
              <li className="block border-b dark:border-gray-700">
                <Link
                  to="/workouts"
                  className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                >
                  Workouts
                </Link>
              </li>
              <li className="block border-b dark:border-gray-700">
                <Link
                  to="/nutrition"
                  className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                >
                  Nutrition
                </Link>
              </li>
              <li className="block border-b dark:border-gray-700">
                <Link
                  to="/shop"
                  className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                >
                  Shop
                </Link>
              </li>
              <li className="block border-b dark:border-gray-700">
                <button
                  type="button"
                  data-collapse-toggle="dropdownMobileNavbar"
                  className="flex justify-between items-center py-3 px-4 w-full text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                >
                  Dropdown{" "}
                  <svg
                    className="w-6 h-6 text-gray-500 dark:text-gray-400"
                    focusable="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul id="dropdownMobileNavbar" className="hidden">
                  <li className="block border-t border-b dark:border-gray-700">
                    <Link
                      to="#"
                      className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                    >
                      Item 1
                    </Link>
                  </li>
                  <li className="block border-b dark:border-gray-700">
                    <Link
                      to="#"
                      className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                    >
                      Item 2
                    </Link>
                  </li>
                  <li className="block">
                    <Link
                      to="#"
                      className="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                    >
                      Item 3
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          )}
        </nav>
      </header>
      <SearchModal
        id="search-modal"
        searchId="search"
        modalOpen={searchModalOpen}
        setModalOpen={setSearchModalOpen}
      />
    </>
  );
};

export default Navbar;
