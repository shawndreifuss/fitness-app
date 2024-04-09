const router = require('express').Router();
const { addComment, deleteComment, getAllComments, getCommentById, updateComment, getCommentsByWorkoutId, toggleLikeOnComment } = require('../../controllers/commentController');

// Create a new comment
router.post('/', addComment);

// Get all comments
router.get('/', getAllComments);

// Get a single comment by ID
router.get('/:id', getCommentById);

// Update a comment by ID
router.put('/:id', updateComment);

// Delete a comment by ID
router.delete('/:id', deleteComment);

//  get comments by workout id
router.get('/workout/:workoutId', getCommentsByWorkoutId);

router.post('/toggle-like',toggleLikeOnComment );

module.exports = router;
