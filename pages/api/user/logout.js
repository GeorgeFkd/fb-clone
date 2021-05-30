import nc from "next-connect";

const handler = nc().get((req, res) => {
    req.logout();
    res.json({ msg: "You are now logged out" });
});

export default handler;
