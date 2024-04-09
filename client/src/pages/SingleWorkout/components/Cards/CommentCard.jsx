import React, { useEffect, useState } from "react";
import { toggleLike } from "@/api/commentActions";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
 
  import { HeartIcon } from "@heroicons/react/24/solid";
  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

  

  function timeAgo(datePast) {
    const seconds = Math.floor((new Date() - new Date(datePast)) / 1000);
  
    let interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }
  
  export function CommentCard({   user, currentUserLiked, comment}) {
    const timePosted = timeAgo(comment?.createdAt);
    const [isLiked, setIsLiked] = useState(currentUserLiked || false);
    const commentId = comment?._id;
    
    const userId = user?._id;

    useEffect(() => {
      setIsLiked(currentUserLiked);
    }, [currentUserLiked]);

  
  
    const handleLikeClick = async () => {
      if (!userId || !commentId) {
        return;
      }
      setIsLiked(!isLiked); 
      try {
        // Assuming toggleLike function needs the comment ID and the user ID
       const reponse =  await toggleLike(commentId, userId);
      } catch (error) {
        console.error("Error toggling like:", error);
      }
    };
    

    return (
      
    <Card
    shadow={false}
    color="transparent"
    
    className="grid items-center gap-6 min-w-full bg-purple-50 bg-opacity-20 p-3 border  border-purple-900"
  >
    <CardBody className="p-0 gap-5 flex min-w-full">
      <div className=" !m-0 h-full  w-full  max-h-[40px] max-w-[40px] ">
        <img
          width={768}
          height={768}
          src={comment?.user?.avatar || "https://via.placeholder.com/150"}
          alt="img"
          className="h-full rounded w-full object-cover object-center"
        />
      </div>
      <div className="min-w-[90%] ">
        <div className="flex gap-1 mb-5 items-center">
          <Typography
            variant="small"
            className=" font-bold flex items-center gap-2 !text-gray-900"
          >
            {comment?.user?.username || "No username"}
          </Typography>
          <Typography variant="small" className="font-medium !text-gray-500">
          {timePosted || "Just now"}
          </Typography>
        </div>
        <Typography className="w-full font-normal mb-4 !text-gray-500">
        {comment?.content || "No content"}
        </Typography>
        <div className="!w-full flex justify-end">
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="text"
              color="gray"
              className="flex items-center gap-1 flex-shrink-0"
            >
              <ArrowUturnLeftIcon className="w-4 text-4 h-4" />
              reply
            </Button>
            <Button
                  size="sm"
                  variant="text"
                  color="red"
                  className="flex items-center gap-1 flex-shrink-0"
                  onClick={handleLikeClick}
                >
                  {isLiked ?  <HeartIcon className="w-4 text-4 h-4" /> : <FavoriteBorderIcon className="w-4 text-4 h-4" /> }
                   like
                </Button>
          </div>
        </div>
      </div>
    </CardBody>
  </Card>

      
       



    );
  }
  
    export default CommentCard;


