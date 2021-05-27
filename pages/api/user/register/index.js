export default (req, res) => {
    if (req.method === "POST") {
        const { username, password } = req.body;
        console.log(username, password);
        res.json({ msg: "succesfull request" });
    } else {
        res.json({
            message: "wrong http reque",
            method: req.method,
            info: [req.body.username, req.body.password],
        });
    }
};
