// Assuming you have an API utility setup similar to previous explanations

import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import CommentCard from "./Cards/CommentCard";
import NewComment from "./Cards/NewComment"; // Make sure this exports a component
import { addComment, getCommentsByWorkoutId } from '@/api/commentActions'; // Adjust the import path to your API functions
import { useParams } from "react-router-dom";



export function Comments({ user }) {
  const [comments, setComments] = useState([]);
  const workoutId = useParams().id;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const fetchedComments = await getCommentsByWorkoutId(workoutId);
        fetchedComments.reverse();
        setComments(fetchedComments);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    fetchComments();
  } , []);


  const handleAddComment = async (commentData) => {
    if (!user) {
      return;
    }
    try {
      const newComment = await addComment( commentData, user, workoutId);
      setComments([newComment, comments]); 
    } catch (error) {
      console.error("Failed to post new comment:", error);
    }
  };

  return (
    <>
  <Typography variant="h4" className="my-10 md:my-14 md:text-center " color="blue-gray">
        Post Your Comment
      </Typography>
      <NewComment onAddComment={handleAddComment} user={user} />
    <section className="w-full max-h-svh  overflow-y-scroll max-w-2xl mx-auto flex mt-10 flex-col px-5 pb-20">
      <div>
      <Typography variant="h4" className="md:text-center" color="blue-gray">
        {comments.length} Comments
      </Typography>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-1">
        {comments && comments.map((comment, idx) => (
          <CommentCard key={idx} comment={comment}   user={user} currentUserLiked={comment?.likes?.includes(user?._id)} />
        ))}
      </div>
      
      </div>
      
    </section>
</>
  );
}

export default Comments;

