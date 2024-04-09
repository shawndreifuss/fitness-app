import React, { useState } from 'react';
import { Button, Typography, Textarea, Avatar } from "@material-tailwind/react";
import { useParams } from "react-router-dom";


export function NewComment({ onAddComment, user }) {
  const  workoutId  = useParams().id;
  const [commentText, setCommentText] = useState('');
  const [error, setError] = useState(''); // Placeholder for error handling

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) {
      setError('Comment cannot be empty.'); // Setting an error message
      return;
    }

    try {
      await onAddComment({ content: commentText, workoutId, user });
      setCommentText(''); // Clear the textarea after submitting
      setError(''); // Clear any error messages
    } catch (error) {
      setError('Failed to post comment.'); // Handle API errors
    }
  };

  return (
    <div>
      <div className="flex !items-center gap-4">
        <div className="!m-0 h-full w-full max-h-[40px] max-w-[40px]">
        <img
      width={768}
      height={768}
      src={user?.avatar || "https://via.placeholder.com/150"}
      alt="img"
      className="h-full rounded w-full object-cover object-center"
    />
        </div>
        <Typography
          variant="small"
          className="font-bold flex items-center gap-2 !text-gray-900"
        >
          {user?.username ||" "}
        </Typography>
      </div>
      <div className="flex-col mt-4 pl-14 h-full">
        <form onSubmit={handleSubmit} className="flex flex-col items-end">
          <Textarea
            label="Your Message"
            variant="static"
            placeholder="Write a nice reply or go home..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <Button type="submit" color="gray" className="mt-4" size="md">
            Post Comment
          </Button>
        </form>
      </div>
    </div>






  );
}

export default NewComment;
