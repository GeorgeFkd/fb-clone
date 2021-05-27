const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    post: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Post",
        required: true,
    },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
