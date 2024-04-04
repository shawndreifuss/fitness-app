import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/api/workouts",
    headers: { "Content-Type": "application/json" },
  });


  


export async function createWorkout(workoutDetails) {
  try {
    const response = await axiosInstance.post('/create-workout', workoutDetails);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating workout:', error.response.data);
    throw error;
  }
}

export async function findAllWorkouts() {
  try {
    const response = await axiosInstance.get('/all-workouts');
    return response.data;
  } catch (error) {
    console.error('Error fetching workouts:', error.response.data);
    throw error;
  }
}

export async function findWorkoutById(id) {
  try {
    const response = await axiosInstance.get(`/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching workout by ID:', error.response.data);
    throw error;
  }
}

export async function deleteWorkoutById(id) {
  try {
    const response = await axiosInstance.delete(`/${id}/delete`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting workout:', error.response.data);
    throw error;
  }
}

export async function updateWorkoutById(id, workoutDetails) {
  try {
    const response = await axiosInstance.put(`/${id}/update`, workoutDetails);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating workout:', error.response.data);
    throw error;
  }
}



export async function findWorkoutsByCoach(coachId) {
  try {
    const response = await axiosInstance.get(`/coach/${coachId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error finding workouts by coach:', error.response.data);
    throw error;
  }
}

export async function findWorkoutsByName(name) {
  try {
    const response = await axiosInstance.get(`/exercise/${name}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error finding workouts by name:', error.response.data);
    throw error;
  }
}

export async function searchWorkouts(searchTerm,muscle, difficulty = "") {
  console.log(searchTerm, muscle, difficulty);
  try {
    // Construct the query parameters string
    const params = new URLSearchParams({
      q: searchTerm, // Uses 'q' for the search term
      muscle, // Add muscle; can be empty if not specified
      difficulty // Add difficulty; it's okay if this is an empty string
    }).toString();

    const response = await axiosInstance.get(`/search?${params}`);
    return response.data;
  } catch (error) {
    console.error('Error searching workouts:', error.response?.data || error.message);
    throw error;
  }
}





