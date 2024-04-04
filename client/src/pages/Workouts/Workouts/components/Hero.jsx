import React from 'react';


function Hero({ searchTerm, setSearchTerm}) {
 

 const handleChange = (e) => {
     const newSearchTerm = e.target.value;
     setSearchTerm(newSearchTerm);
   
 };
  return (
    <>
    <label htmlFor="default-search" className=" w-full text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="absolute right-0 top-16 w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" 
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for workouts"
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-100 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
    </div>
    <div
      className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
      style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg")' }}
    >
      <div className="w-full">
        <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
         Find Workouts that fit your lifestyle
        </h4>
        <p className="mb-[40px] max-w-full text-base font-medium text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
          Enter in the search bar to find the best workouts for you
        </p>

        <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
          <button className="text-black linear rounded-xl bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
            Discover now
          </button>
          <button
            href=" "
            className="text-base font-medium text-lightPrimary hover:text-lightPrimary 2xl:ml-2"
          >
            Watch Video
          </button>
        </div>
      </div>
    </div>
    
  </>
  );
}
export default Hero;



