const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    group: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Group",
        required: true,
    },
});
const Message = mongoose.model("Message", messageSchema);
export default Message;
