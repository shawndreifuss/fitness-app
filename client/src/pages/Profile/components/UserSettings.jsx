import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import AvatarCard from "../components/Cards/AvatarCard";
import PreferencesCard from "./Cards/PreferencesCard";
import NotificationsCard from "./Cards/NotificationsCard";

const UserSettings = (user) => {
  return (
    <>
<div className="mt-16 grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
    <div className="mb-4 col-span-full xl:mb-2">
       <Breadcrumbs />
        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">User settings</h1>
    </div>
    <div className="col-span-full xl:col-auto">
       <AvatarCard user={user} />
        <PreferencesCard user={user} /> 
        <NotificationsCard user={user} />
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="flow-root">
                <h3 className="text-xl font-semibold dark:text-white">Other accounts</h3>
                <ul className="mb-6 divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-4">
                        <div className="flex justify-between xl:block 2xl:flex align-center 2xl:space-x-4">
                            <div className="flex space-x-4 xl:mb-4 2xl:mb-0">
                                <div>
                                    <img className="w-6 h-6 rounded-full" src="/images/users/bonnie-green.png" alt="Bonnie image"/>                            
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-base font-semibold text-gray-900 leading-none truncate mb-0.5 dark:text-white">
                                        Bonnie Green
                                    </p>
                                    <p className="mb-1 text-sm font-normal truncate text-primary-700 dark:text-primary-500">
                                        New York, USA
                                    </p>
                                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                        Last seen: 1 min ago
                                    </p>
                                </div>
                            </div>
                            <div className="inline-flex items-center w-auto xl:w-full 2xl:w-auto">
                                <a href="#" className="w-full px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Disconnect</a>
                            </div>
                        </div>
                    </li>
                    <li className="py-4">
                        <div className="flex justify-between xl:block 2xl:flex align-center 2xl:space-x-4">
                            <div className="flex space-x-4 xl:mb-4 2xl:mb-0">
                                <div>
                                    <img className="w-6 h-6 rounded-full" src="/images/users/jese-leos.png" alt="Jese image"/>                            
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-base font-semibold text-gray-900 leading-none truncate mb-0.5 dark:text-white">
                                        Jese Leos
                                    </p>
                                    <p className="mb-1 text-sm font-normal truncate text-primary-700 dark:text-primary-500">
                                        California, USA
                                    </p>
                                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                        Last seen: 2 min ago
                                    </p>
                                </div>
                            </div>
                            <div className="inline-flex items-center w-auto xl:w-full 2xl:w-auto">
                                <a href="#" className="w-full px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Disconnect</a>
                            </div>
                        </div>
                    </li>
                    <li className="py-4">
                        <div className="flex justify-between xl:block 2xl:flex align-center 2xl:space-x-4">
                            <div className="flex space-x-4 xl:mb-4 2xl:mb-0">
                                <div>
                                    <img className="w-6 h-6 rounded-full" src="/images/users/thomas-lean.png" alt="Thomas image"/>                            
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-base font-semibold text-gray-900 leading-none truncate mb-0.5 dark:text-white">
                                        Thomas Lean
                                    </p>
                                    <p className="mb-1 text-sm font-normal truncate text-primary-700 dark:text-primary-500">
                                        Texas, USA
                                    </p>
                                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                        Last seen: 1 hour ago
                                    </p>
                                </div>
                            </div>
                            <div className="inline-flex items-center w-auto xl:w-full 2xl:w-auto">
                                <a href="#" className="w-full px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Disconnect</a>
                            </div>
                        </div>
                    </li>
                    <li className="pt-4">
                        <div className="flex justify-between xl:block 2xl:flex align-center 2xl:space-x-4">
                            <div className="flex space-x-4 xl:mb-4 2xl:mb-0">
                                <div>
                                    <img className="w-6 h-6 rounded-full" src="/images/users/lana-byrd.png" alt="Lana image"/>                            
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-base font-semibold text-gray-900 leading-none truncate mb-0.5 dark:text-white">
                                        Lana Byrd
                                    </p>
                                    <p className="mb-1 text-sm font-normal truncate text-primary-700 dark:text-primary-500">
                                        Texas, USA
                                    </p>
                                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                        Last seen: 1 hour ago
                                    </p>
                                </div>
                            </div>
                            <div className="inline-flex items-center w-auto xl:w-full 2xl:w-auto">
                                <a href="#" className="w-full px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Disconnect</a>
                            </div>
                        </div>
                    </li>
                </ul>
                <div>
                    <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save all</button>
                </div>
            </div>
        </div>
    </div>
    {/* <div className="col-span-2">
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold dark:text-white">General information</h3>
            <form action="#">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label for="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                        <input type="text" name="first-name" id="first-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Bonnie" required/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                        <input type="text" name="last-name" id="last-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Green" required/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                        <input type="text" name="country" id="country" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="United States" required/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                        <input type="text" name="city" id="city" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="e.g. San Francisco" required/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="text" name="address" id="address" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="e.g. California" required/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="example@company.com" required/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                        <input type="number" name="phone-number" id="phone-number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="e.g. +(12)3456 789" required/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="birthday" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
                        <input type="number" name="birthday" id="birthday" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="15/08/1990" required/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="organization" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization</label>
                        <input type="text" name="organization" id="organization" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Company Name" required/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                        <input type="text" name="role" id="role" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="React Developer" required/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                        <input type="text" name="department" id="department" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Development" required/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="zip-code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zip/postal code</label>
                        <input type="number" name="zip-code" id="zip-code" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="123456" required/>
                    </div>
                    <div className="col-span-6 sm:col-full">
                        <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="submit">Save all</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold dark:text-white">Password information</h3>
            <form action="#">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label for="current-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current password</label>
                        <input type="text" name="current-password" id="current-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="••••••••" required/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
                        <input data-popover-target="popover-password" data-popover-placement="bottom" type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required/>
                        <div data-popover id="popover-password" role="tooltip" className="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                            <div className="p-3 space-y-2">
                                <h3 className="font-semibold text-gray-900 dark:text-white">Must have at least 6 characters</h3>
                                <div className="grid grid-cols-4 gap-2">
                                    <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
                                    <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
                                    <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
                                    <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
                                </div>
                                <p>It’s better to have:</p>
                                <ul>
                                    <li className="flex items-center mb-1">
                                        <svg className="w-4 h-4 mr-2 text-green-400 dark:text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        Upper & lower case letters
                                    </li>
                                    <li className="flex items-center mb-1">
                                        <svg className="w-4 h-4 mr-2 text-gray-300 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        A symbol (#$&)
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-gray-300 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        A longer password (min. 12 chars.)
                                    </li>
                                </ul>
                        </div>
                        <div data-popper-arrow></div>
                        </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type="text" name="confirm-password" id="confirm-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="••••••••" required/>
                    </div>
                    <div className="col-span-6 sm:col-full">
                        <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="submit">Save all</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="flow-root">
                <h3 className="text-xl font-semibold dark:text-white">Sessions</h3>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                                    California 123.123.123.123
                                </p>
                                <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                                    Chrome on macOS
                                </p>
                            </div>
                            <div className="inline-flex items-center">
                                <a href="#" className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Revoke</a>
                            </div>
                        </div>
                    </li>
                    <li className="pt-4 pb-6">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                                    Rome 24.456.355.98
                                </p>
                                <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                                    Safari on iPhone                                
                                </p>
                            </div>
                            <div className="inline-flex items-center">
                                <a href="#" className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Revoke</a>
                            </div>
                        </div>
                    </li>
                </ul>
                <div>
                    <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">See more</button>
                </div>
            </div>
        </div>
    </div>
    
</div>
<div className="grid grid-cols-1 px-4 xl:grid-cols-2 xl:gap-4">
    <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 xl:mb-0">
        <div className="flow-root">
            <h3 className="text-xl font-semibold dark:text-white">Alerts & Notifications</h3>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">You can set up Themesberg to get notifications</p>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              
                <div className="flex items-center justify-between py-4">
                    <div className="flex flex-col flex-grow">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">Company News</div>
                        <div className="text-base font-normal text-gray-500 dark:text-gray-400">Get Themesberg news, announcements, and product updates</div>
                    </div>
                    <label for="company-news" className="relative flex items-center cursor-pointer">
                        <input type="checkbox" id="company-news" className="sr-only"/>
                        <span className="h-6 bg-gray-200 border border-gray-200 rounded-full w-11 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
                    </label>
                </div>
                <div className="flex items-center justify-between py-4">
                    <div className="flex flex-col flex-grow">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">Account Activity</div>
                        <div className="text-base font-normal text-gray-500 dark:text-gray-400">Get important notifications about you or activity you've missed</div>
                    </div>
                    <label for="account-activity" className="relative flex items-center cursor-pointer">
                        <input type="checkbox" id="account-activity" className="sr-only" checked/>
                        <span className="h-6 bg-gray-200 border border-gray-200 rounded-full w-11 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
                    </label>
                </div>
                <div className="flex items-center justify-between py-4">
                    <div className="flex flex-col flex-grow">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">Meetups Near You</div>
                        <div className="text-base font-normal text-gray-500 dark:text-gray-400">Get an email when a Dribbble Meetup is posted close to my location</div>
                    </div>
                    <label for="meetups" className="relative flex items-center cursor-pointer">
                        <input type="checkbox" id="meetups" className="sr-only" checked/>
                        <span className="h-6 bg-gray-200 border border-gray-200 rounded-full w-11 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
                    </label>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div className="flex flex-col flex-grow">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">New Messages</div>
                        <div className="text-base font-normal text-gray-500 dark:text-gray-400">Get Themsberg news, announcements, and product updates</div>
                    </div>
                    <label for="new-messages" className="relative flex items-center cursor-pointer">
                        <input type="checkbox" id="new-messages" className="sr-only"/>
                        <span className="h-6 bg-gray-200 border border-gray-200 rounded-full w-11 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
                    </label>
                </div>
            </div>
            <div className="mt-6">
                <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save all</button>
            </div>
        </div>
    </div>
    <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 xl:mb-0">
        <div className="flow-root">
            <h3 className="text-xl font-semibold dark:text-white">Email Notifications</h3>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">You can set up Themesberg to get email notifications </p>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="flex items-center justify-between py-4">
                    <div className="flex flex-col flex-grow">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">Rating reminders</div>
                        <div className="text-base font-normal text-gray-500 dark:text-gray-400">Send an email reminding me to rate an item a week after purchase</div>
                    </div>
                    <label for="rating-reminders" className="relative flex items-center cursor-pointer">
                        <input type="checkbox" id="rating-reminders" className="sr-only"/>
                        <span className="h-6 bg-gray-200 border border-gray-200 rounded-full w-11 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
                    </label>
                </div>
                <div className="flex items-center justify-between py-4">
                    <div className="flex flex-col flex-grow">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">Item update notifications</div>
                        <div className="text-base font-normal text-gray-500 dark:text-gray-400">Send user and product notifications for you</div>
                    </div>
                    <label for="item-update" className="relative flex items-center cursor-pointer">
                        <input type="checkbox" id="item-update" className="sr-only" checked/>
                        <span className="h-6 bg-gray-200 border border-gray-200 rounded-full w-11 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
                    </label>
                </div>
                <div className="flex items-center justify-between py-4">
                    <div className="flex flex-col flex-grow">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">Item comment notifications</div>
                        <div className="text-base font-normal text-gray-500 dark:text-gray-400">Send me an email when someone comments on one of my items</div>
                    </div>
                    <label for="item-comment" className="relative flex items-center cursor-pointer">
                        <input type="checkbox" id="item-comment" className="sr-only" checked/>
                        <span className="h-6 bg-gray-200 border border-gray-200 rounded-full w-11 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
                    </label>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div className="flex flex-col flex-grow">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">Buyer review notifications</div>
                        <div className="text-base font-normal text-gray-500 dark:text-gray-400">Send me an email when someone leaves a review with their rating</div>
                    </div>
                    <label for="buyer-rev" className="relative flex items-center cursor-pointer">
                        <input type="checkbox" id="buyer-rev" className="sr-only"/>
                        <span className="h-6 bg-gray-200 border border-gray-200 rounded-full w-11 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
                    </label>
                </div>
            </div>
            <div className="mt-6">
                <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save all</button>
            </div>
        </div>
    </div>
</div> */}
</div>

</>
  );
};

export default UserSettings;
