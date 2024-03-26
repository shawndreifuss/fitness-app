import React from "react";
import { Faqs, Workouts, Nutrition, Plans, Store,About } from "./components";
import Hero from "./components/Hero";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Store />
      <Nutrition />
      <Plans />
      <Workouts />
      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
