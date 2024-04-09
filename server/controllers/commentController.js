const { Comment } = require('../models'); 
// Create a new comment
module.exports.addComment = async (req, res) => {
 
  try {
    const { content, workoutId, user } = req.body;
    const newComment = new Comment({
      content,
      workoutId,
      user,
    });

    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all comments
module.exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate('user');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single comment by ID
module.exports.getCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id).populate('user');

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a comment by ID
module.exports.updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    const updatedComment = await Comment.findByIdAndUpdate(id, { content }, { new: true });

    if (!updatedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.json(updatedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a comment by ID
module.exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedComment = await Comment.findByIdAndDelete(id);

    if (!deletedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getCommentsByWorkoutId = async (req, res) => {
  const { workoutId } = req.params;
  try {
    
    const comments = await Comment.find({ workoutId: workoutId }).populate('user');
   

    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports.toggleLikeOnComment = async (req, res) => {
  const {  commentId, userId } = req.body; 
  

  try {
    const comment = await Comment.findById(commentId).populate('user')
   

    if (!comment) {
      return res.status(404).send('Comment not found.');
    }

    // Check if the user has already liked the comment
    const likeIndex = comment.likes.findIndex(id => id.toString() === userId);

    if (likeIndex === -1) {
      // User hasn't liked the comment yet, so add their like
      comment.likes.push(userId);
    } else {
      // User has liked the comment, so remove their like
      comment.likes.splice(likeIndex, 1);
    }

    await comment.save();
    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};