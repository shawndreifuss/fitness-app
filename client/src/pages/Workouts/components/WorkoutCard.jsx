import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toggleFavoriteWorkout } from "@/api/userActions";
import ThumbDownOffAltTwoToneIcon from "@mui/icons-material/ThumbDownOffAltTwoTone";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';

export function WorkoutCard({ workout, user }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [likeStatus, setLikeStatus] = useState({
    liked: false,
    likes: workout?.likes,
  });
  const [dislikeStatus, setDislikeStatus] = useState({
    disliked: false,
    dislikes: workout?.dislikes,
  });

  useEffect(() => {
    // Check if the user's favorites include the current workout and update isFavorite accordingly
    if (user && user.favorites.includes(workout._id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [user, workout]); // Re-run this effect if user or workout changes

  const handleFavoriteToggle = async () => {
    const newIsFavorite = !isFavorite;
    setIsFavorite(newIsFavorite); // Optimistically updating the UI for a better user experience
  
    try {
      await toggleFavoriteWorkout(user._id, workout._id, isFavorite);
      // If toggle is successful, the UI is already up to date due to optimistic update
    } catch (error) {
      console.error('Error toggling favorite status:', error);
      setIsFavorite(!newIsFavorite); // Revert the UI update in case of an error
    }
  };
  const handleLike = () => {
    // This function would also call the backend to update the likes for the workout
    if (!likeStatus.liked) {
      setLikeStatus({ liked: true, likes: likeStatus.likes + 1 });
      if (dislikeStatus.disliked) {
        setDislikeStatus({
          disliked: false,
          dislikes: dislikeStatus.dislikes - 1,
        });
      }
    }
  };

  const handleDislike = () => {
    // Similarly, update the backend on dislike
    if (!dislikeStatus.disliked) {
      setDislikeStatus({
        disliked: true,
        dislikes: dislikeStatus.dislikes + 1,
      });
      if (likeStatus.liked) {
        setLikeStatus({ liked: false, likes: likeStatus.likes - 1 });
      }
    }
  };

  return (
    <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-noneflex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}">
      <div className="h-full w-full">
        <div className="relative w-full">
          <img
            src={workout?.images[0].toString()}
            className="mb-3 h-full  max-h-48 w-full   3xl:h-full 3xl:w-full"
            alt="hello"
          />
          <button
  onClick={handleFavoriteToggle}
  className="absolute top-3 right-3 flex items-center justify-center rounded-xl bg-white/50 backdrop-blur-xl p-2 text-brand-500 hover:cursor-pointer"
>
  <div className="flex h-5 w-5 items-center justify-center text-xl hover:w-6 hover:h-6 dark:text-navy-900">
    {isFavorite ? (
      <FavoriteIcon color="error" /> // Assuming you want the filled icon when favorited
    ) : (
      <AddIcon /> // Assuming you want to show an add icon when not favorited
    )}
  </div>
</button>
        </div>
        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg max-w-48 font-bold text-navy-700 dark:text-white">
              {" "}
              {workout?.name}{" "}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              {/*  TODO: ADD Coach  By {workout?.coach}{" "} */}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleDislike}
              className={`h-8 w-8 ${
                dislikeStatus.disliked ? "text-red-600" : "text-gray-500"
              }`}
            >
              <ThumbDownOffAltTwoToneIcon />
            </button>
            <button
              onClick={handleLike}
              className={`h-8 w-8 ${
                likeStatus.liked ? "text-blue-600" : "text-gray-500"
              }`}
            >
              <ThumbUpTwoToneIcon />
            </button>
          </div>
        </div>
        <div className="mb-2 flex flex-col gap-5 w-3/4">
          <div className="flex gap-5">
            <Diversity2Icon />
            <span className="text-md text-gray-600 dark:text-gray-400">
              Muscle: {workout?.primaryMuscles}
            </span>
          </div>
          <div className="flex gap-5">
            <FitnessCenterIcon />
            <span className="text-md text-gray-600 dark:text-gray-400">
              Type: {workout?.type}
            </span>
          </div>
          <div className="flex gap-5 mb-5">
            <MonitorWeightIcon color="" />
            <span className="text-md text-gray-600 dark:text-gray-400">
              Equipment: {workout?.equipmentDetails}
            </span>
          </div>
        </div>

        <Link to={`/workouts/${workout._id}`}>
          <button className="linear w-full rounded-md bg-brand-900 px-4  py-1 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90">
            View
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WorkoutCard;
