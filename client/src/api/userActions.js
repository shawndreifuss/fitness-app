import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api/users",
  headers: { "Content-Type": "application/json" },
});

export async function toggleFavoriteWorkout(userId, workoutId, isFavorite) {
  try {
    const endpoint = `/${userId}/favorites`; // Adjusted endpoint to include userId

    // If the favorite status is currently true, we want to remove the favorite (delete)
    if (isFavorite) {
      // For delete requests, if your server expects the workoutId in the body, adjust accordingly. 
      // This is an example if your server can accept body in delete request, which is not typical for all servers.
      const response = await axiosInstance.delete(endpoint, { data: { workoutId } });
      console.log('Favorite removed successfully:', response.data);
    } else {
      // For adding a favorite (post), you can send the data as usual
      const response = await axiosInstance.post(endpoint, { workoutId });
      console.log('Favorite added successfully:', response.data);
    }
  } catch (error) {
    console.error('Failed to toggle favorite workout:', error.response?.data || error.message);
    throw error; // Rethrowing the error for handling in the component if necessary
  }
}

