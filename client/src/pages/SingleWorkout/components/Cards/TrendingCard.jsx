import React from 'react'

const TrendingCard = () => {
  return (
    <div className="flex flex-wrap mb-8 -mx-4">
    <div className="w-full px-4">
      <h2
        className="wow fadeInUp relative pb-5 text-2xl font-semibold text-dark dark:text-white sm:text-[28px]"
        data-wow-delay=".1s
        "
      >
        Trending Workouts
      </h2>
      <span
        className="mb-10 inline-block h-[2px] w-20 bg-primary"
      ></span>
    </div>

    <div className="w-full px-4 md:w-1/2 lg:w-full">
      <div
        className="flex items-center w-full pb-5 mb-5 border-b wow fadeInUp border-stroke dark:border-dark-3"
        data-wow-delay=".1s
        "
      >
        <div
          className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-xl"
        >
          <img
            src="/img/arm-day.webp"
            alt="image"
            className="w-full"
          />
        </div>
        <div className="w-full">
          <h4>
            <a
              href="#"
              className="inline-block mb-1 text-lg font-medium leading-snug text-dark hover:text-primary dark:text-dark-6 dark:hover:text-primary lg:text-base xl:text-lg"
            >
              Arm workout for beginners
            </a>
          </h4>
          <p className="text-sm text-body-color dark:text-dark-6">
            Biceps
          </p>
        </div>
      </div>
    </div>
    <div className="w-full px-4 md:w-1/2 lg:w-full">
      <div
        className="flex items-center w-full pb-5 mb-5 border-b wow fadeInUp border-stroke dark:border-dark-3"
        data-wow-delay=".1s
        "
      >
        <div
          className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-xl"
        >
          <img
            src="/img/leg-day.webp"
            alt="image"
            className="w-full"
          />
        </div>
        <div className="w-full">
          <h4>
            <a
              href="#"
              className="inline-block mb-1 text-lg font-medium leading-snug text-dark hover:text-primary dark:text-dark-6 dark:hover:text-primary lg:text-base xl:text-lg"
            >
              Legs workout for beginners
            </a>
          </h4>
          <p className="text-sm text-body-color dark:text-dark-6">
            Quads
          </p>
        </div>
      </div>
    </div>
    <div className="w-full px-4 md:w-1/2 lg:w-full">
      <div
        className="flex items-center w-full pb-5 mb-5 border-b wow fadeInUp border-stroke dark:border-dark-3"
        data-wow-delay=".1s
        "
      >
        <div
          className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-xl"
        >
          <img
            src="/img/cardio-day.webp"
            alt="image"
            className="w-full"
          />
        </div>
        <div className="w-full">
          <h4>
            <a
              href="#"
              className="inline-block mb-1 text-lg font-medium leading-snug text-dark hover:text-primary dark:text-dark-6 dark:hover:text-primary lg:text-base xl:text-lg"
            >
               50 best ab workouts for beginners
            </a>
          </h4>
          <p className="text-sm text-body-color dark:text-dark-6">
            Abs
          </p>
        </div>
      </div>
    </div>
    <div className="w-full px-4 md:w-1/2 lg:w-full">
      <div
        className="flex items-center w-full pb-5 mb-5 border-0 wow fadeInUp border-stroke dark:border-dark-3 md:border-b lg:border-0"
        data-wow-delay=".1s
        "
      >
        <div
          className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-xl"
        >
          <img
            src="/img/chest-day.webp"
            alt="image"
            className="w-full"
          />
        </div>
        <div className="w-full">
          <h4>
            <a
              href="#"
              className="inline-block mb-1 text-lg font-medium leading-snug text-dark hover:text-primary dark:text-dark-6 dark:hover:text-primary lg:text-base xl:text-lg"
            >
              Full body workout for beginners
            </a>
          </h4>
          <p className="text-sm text-body-color dark:text-dark-6">
            Full body
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TrendingCard