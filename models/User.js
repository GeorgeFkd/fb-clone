const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    avatar: {
        data: Buffer,
        contentType: String,
    },
    friends: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
});
userSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
});
console.log("hello");
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
