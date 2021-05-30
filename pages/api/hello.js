// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const signature = require("cookie-signature");
const secret = "my lil secret";

import { withSession } from "next-session";
import nextConnect from "next-connect";

const handler = nextConnect().get((req, res) => {
    console.log(req.session);
    res.json({ user: req.session.user });
});
export default withSession(handler, {
    encode: (raw) => signature.unsign(raw.slice(2), secret),
    decode: (sid) => (sid ? "s:" + signature.sign(sid, secret) : null),
    cookie: {
        maxAge: 1000 * 60 * 3,
        sameSite: false,
    },
});
