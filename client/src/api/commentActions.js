import axios from "axios";
import { comment } from "postcss";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api/comments",
  headers: { "Content-Type": "application/json" },
});

// Add a comment
export const addComment = async (commentData) => {
  try {
    const response = await axiosInstance.post('/',commentData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding comment:', error.response?.data);
    throw error;
  }
};

// Get all comments
export const getAllComments = async () => {
  try {
    const response = await axiosInstance.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error.response?.data);
    throw error;
  }
};

// Get a comment by ID
export const getCommentById = async (commentId) => {
  try {
    const response = await axiosInstance.get(`/${commentId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comment:', error.response?.data);
    throw error;
  }
};

// Update a comment by ID
export const updateComment = async (commentId, updatedData) => {
  try {
    const response = await axiosInstance.put(`/${commentId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating comment:', error.response?.data);
    throw error;
  }
};

// Delete a comment by ID
export const deleteComment = async (commentId) => {
  try {
    await axiosInstance.delete(`/${commentId}`);
  } catch (error) {
    console.error('Error deleting comment:', error.response?.data);
    throw error;
  }
};

export const getCommentsByWorkoutId = async (workoutId) => {
  try {
    const response = await axiosInstance.get(`/workout/${workoutId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error.response?.data);
    throw error;
  }
}

export const toggleLike = async (commentId, userId) => {
  const payload = { commentId, userId };
  console.log(payload);
  try {
    // Make the POST request to toggle the like await axiosInstance.post('/toggle-like', payload);
    const response = await axiosInstance.post('/toggle-like', payload);

    // Return the updated comment object on success
    return response.data
  } catch (error) {
    console.error('Error toggling like on comment:', error.response?.data);
    throw error;
  }
};
