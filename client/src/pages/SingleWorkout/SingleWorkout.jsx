import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import { useUser } from "@/context";
import { findWorkoutById } from "@/api/workoutActions";
import { useParams } from "react-router-dom";
import Article from "./components/Article";
import Instructions from "./components/Instructions";
import SubscribeCard from "./components/Cards/SubscribeCard";
import "./index.modules.css";
import RelatedArticles from "./components/RelatedArticles";
import TrendingCard from "./components/Cards/TrendingCard";
import Sidebar from "./components/Sidebar";

const SingleWorkout = () => {
  const { id } = useParams();
  const { user } = useUser();
  const [workout, setWorkout] = useState({});

  useEffect(() => {
    findWorkoutById(id).then((res) => {
      setWorkout(res.data);
    });

  }, [id]);

  return (
    <>
      <Hero user={user} workout={workout} />
      <section className="pb-10 -mt-20 dark:bg-dark lg:pb-20 ">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4 pt-40">
            <Article workout={workout} user={user} />
            <div className="w-full px-4 lg:w-4/12">
              <div>
                <Sidebar />
              </div>
            </div>
          </div>  <RelatedArticles />
        </div>
      
      </section>
    </>
  );
};

export default SingleWorkout;
