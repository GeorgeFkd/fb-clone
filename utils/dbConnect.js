import mongoose from "mongoose";

const connection = {};
const clusterURL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mycluster.hevqg.mongodb.net/FB_App?retryWrites=true&w=majority`;
const localUrl = "'mongodb://localhost:27017/fb_clone";
async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(localUrl, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
