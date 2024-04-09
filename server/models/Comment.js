const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({
  content: {
    type: String,
    required: true,
    minlength: 1,
    trim: true, // Removes whitespace from both ends of a string
  },
  workoutId: {
    type: Schema.Types.ObjectId,
    ref: "Workout",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  parentComment: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
    required: false, // Optional, only needed for replies, not top-level comments
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

// If you need to automatically update the 'updatedAt' field on document updates
CommentSchema.pre("save", function (next) {
  if (this.isModified() && !this.isNew) {
    this.updatedAt = new Date();
  }
  next();
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
