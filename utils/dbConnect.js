const mongoose = require("mongoose");
let connection;
try {
    connection = await mongoose.connect(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mycluster.hevqg.mongodb.net/FB_App?retryWrites=true&w=majority`,
        {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );
    console.log("ok");
} catch (err) {
    console.log(err);
}

export default connection;
