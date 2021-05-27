const User = require("../../../models/User");
var passport = require("passport");
import mongoConnection from "../../../utils/dbConnect";
const LocalStrategy = require("passport-local").Strategy;
import nc from "next-connect";

mongoConnection();
function passportSetup() {
    passport.initialize();
    passport.session();
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
}

passportSetup();

const handler = nc().post(
    passport.authenticate("local", function (err, user, info) {
        console.log("hello 2");
        if (err) return console.error(err);
        if (!err) return console.log("logged in", user);
    })
);

export default handler;
