const User = require("../../../models/User");
var passport = require("passport");
const mongoConnection = require("../../../utils/dbConnect");
const LocalStrategy = require("passport-local").Strategy;
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}

function registerUser(req, res) {
    if (req.method === "POST") {
        const { password, name, email } = req.body;
        console.log(username, password, name, email);
        res.json({ msg: "succesfull request" });
    } else {
        res.json({
            message: "wrong http reque",
            method: req.method,
            info: [req.body.username, req.body.password],
        });
    }
}

export default async (req, res) => {
    await runMiddleware(req, res, passport.initialize());
    await runMiddleware(req, res, passport.session());
    await runMiddleware(req, res, passport.use(User.createStrategy()));
    await runMiddleware(req, res, passport.serializeUser(User.serializeUser()));
    await runMiddleware(
        req,
        res,
        passport.deserializeUser(User.deserializeUser())
    );
};
