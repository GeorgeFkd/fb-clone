const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
    },

    description: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    comments: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Comment",
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
