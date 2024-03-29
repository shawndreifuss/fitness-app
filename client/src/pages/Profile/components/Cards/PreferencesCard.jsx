import React from 'react'

const PreferencesCard = ({user}) => {
  const currentUser = user.user
  
  return (
    <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
    <h3 className="mb-4 text-xl font-semibold dark:text-white">Dietary Restrictions</h3>
    <div className="mb-4">
        <label htmlFor="settings-nutrition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Diet selection</label>
        <select id="settings-nutrition" name="nutrition" className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
          <option>{currentUser?.nutritionalSettings?.dietaryRestrictions || "None"}</option>
            <option>Gluten Free</option>
            <option>Low Carb</option>
            <option>Keto</option>
            <option>Vegetarian</option>
            <option>None</option>
        </select>
    </div>
    <div>
        <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save all</button>
    </div>
</div>
  )
}

export default PreferencesCard