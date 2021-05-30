const User = require("../../../models/User");
var passport = require("passport");
const signature = require("cookie-signature");
const {} = require("mongodb");
import mongoConnection from "../../../utils/dbConnect";
const LocalStrategy = require("passport-local").Strategy;
import nc from "next-connect";
import { session, applySession } from "next-session";
const secret = "my lil secret";

mongoConnection();
function passportSetup() {
    passport.initialize();
    passport.session();
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
}
//for some reason i couldnt get it to work without wrapping it with sth
passportSetup();
function __promisifiedPassportAuthentication(req, res) {
    return new Promise((resolve, reject) => {
        passport.authenticate(
            "local",
            { session: true },
            async (err, user, info) => {
                console.log(info);
                if (err) {
                    //console.error(err);
                    return res
                        .status(500)
                        .json({ success: false, msg: "logging in failed" });
                }
                if (info) {
                    return res.status(400).json({ error: true, info });
                }
                console.log("user", user);
                if (!err) {
                    await applySession(req, res, {
                        encode: (raw) => signature.unsign(raw.slice(2), secret),
                        decode: (sid) =>
                            sid ? "s:" + signature.sign(sid, secret) : null,
                        cookie: {
                            maxAge: 1000 * 60 * 3,
                            sameSite: false,
                        },
                        autoCommit: true,
                    });
                    req.session.user = user;
                    console.log(req.session);
                    return res
                        .status(201)
                        .json({ success: true, msg: "logged in succesfully" });
                }
            }
        )(req, res); // <-- that guy right there
    });
}

const handler = nc().post(
    async (req, res) => {
        await __promisifiedPassportAuthentication(req, res);
    }

    // passport.authenticate("local", function (err, user, info) {
    //     console.log("hello 2");
    //     if (err) console.error(err);
    //     // return res
    //     //     .status(500)
    //     //     .json({ success: false, msg: "logging in failed" });
    //     if (!err) console.log(user);
    //     // return res
    //     //     .status(201)
    //     //     .json({ success: true, msg: "logged in succesfull" });
    // })
);

export default handler;
