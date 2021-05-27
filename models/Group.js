const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    members: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
    messages: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Message",
        },
    ],
});

const Group = mongoose.model("Group", groupSchema);

export default Group;
