import { Button } from '@material-tailwind/react'
import React from 'react'


const RelatedArticles = () => {
  return (
    <div className="flex flex-wrap -mx-4">
    <div className="w-full px-4 wow fadeInUp mt-14" data-wow-delay=".2s">
      <h2
        className="relative pb-5 text-2xl font-semibold text-dark dark:text-white sm:text-[36px]"
      >
        Shop Our Gear 
      </h2>
      <span className="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
    </div>
    <div className="w-full px-4 md:w-1/3 lg:w-1/4">
      <div className="mb-10 wow fadeInUp group" data-wow-delay=".1s">
        <div className="mb-8 overflow-hidden rounded-[5px]">
          <a href="blog-details.html" className="block">
            <img
              src="/img/hoodie.webp"
              alt="image"
              className="w-full transition group-hover:rotate-6 group-hover:scale-125"
            />
          </a>
        </div>
        <div>
          <Button
            className="mb-6 inline-block rounded-[5px] bg-purple-500  "
          >
           View
          </Button>
          <h3>
            <a
              href="blog-details.html"
              className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
            >
              New arrivals: The best Hoodies for your workout
            </a>
          </h3>
          <p
            className="max-w-[370px] text-base text-body-color dark:text-dark-6"
          >
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
      </div>
    </div>
    <div className="w-full px-4 md:w-1/3 lg:w-1/4">
      <div className="mb-10 wow fadeInUp group" data-wow-delay=".15s">
        <div className="mb-8 overflow-hidden rounded-[5px]">
          <a href="blog-details.html" className="block">
            <img
              src="/img/food.webp"
              alt="image"
              className="w-full transition group-hover:rotate-6 group-hover:scale-125"
            />
          </a>
        </div>
        <div>
        <Button
            className="mb-6 inline-block rounded-[5px] bg-purple-500  "
          >
           View
          </Button>
          <h3>
            <a
              href="blog-details.html"
              className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
            >
              Nutrition Guide and Meal Plan for your workout
            </a>
          </h3>
          <p
            className="max-w-[370px] text-base text-body-color dark:text-dark-6"
          >
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
      </div>
    </div>
    <div className="w-full px-4 md:w-1/3 lg:w-1/4">
      <div className="mb-10 wow fadeInUp group" data-wow-delay=".2s">
        <div className="mb-8 overflow-hidden rounded-[5px]">
          <a href="blog-details.html" className="block">
            <img
              src="/img/clothing.webp"
              alt="image"
              className="w-full transition group-hover:rotate-6 group-hover:scale-125"
            />
          </a>
        </div>
        <div>
        <Button
            className="mb-6 inline-block rounded-[5px] bg-purple-500  "
          >
           View
          </Button>
          <h3>
            <a
              href="blog-details.html"
              className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
            >
              Checkout the latest trends in fitness
            </a>
          </h3>
          <p
            className="max-w-[370px] text-base text-body-color dark:text-dark-6"
          >
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
      </div>
    </div>
    <div className="w-full px-4 md:w-1/3 lg:w-1/4">
      <div className="mb-10 wow fadeInUp group" data-wow-delay=".2s">
        <div className="mb-8 overflow-hidden rounded-[5px]">
          <a href="blog-details.html" className="block">
            <img
              src="/img/shorts.webp"
              alt="image"
              className="w-full transition group-hover:rotate-1 group-hover:scale-110"
            />
          </a>
        </div>
        <div>
        <Button
            className="mb-6 inline-block rounded-[5px] bg-purple-500  "
          >
           View
          </Button>
          <h3>
            <a
              href="blog-details.html"
              className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
            >
              Checkout the newest shorts for your workout
            </a>
          </h3>
          <p
            className="max-w-[370px] text-base text-body-color dark:text-dark-6"
          >
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RelatedArticles