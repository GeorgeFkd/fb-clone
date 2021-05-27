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
const handler = nc().post((req, res) => {
    const { username, password, email, name } = req.body;
    console.log(username, password, email, name);
    User.register(
        new User({ username, email, name }),
        password,
        function (err, user) {
            if (err) {
                console.log(err);

                return res.json("register faile");
            }
            passport.authenticate("local")(req, res, function () {
                console.log("we mad it");
                return res.redirect("/");
            });
        }
    );
});

export default handler;
