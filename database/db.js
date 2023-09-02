import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
//for setting the connection to database
export const connection = () => {
  const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-81jyy0z-shard-00-00.xnijm65.mongodb.net:27017,ac-81jyy0z-shard-00-01.xnijm65.mongodb.net:27017,ac-81jyy0z-shard-00-02.xnijm65.mongodb.net:27017/?ssl=true&replicaSet=atlas-g8qxbz-shard-0&authSource=admin&retryWrites=true&w=majority`;
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
  mongoose.connection.on("connected", () => {
    console.log("database connected successfully");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("database disconnected");
  });
  mongoose.connection.on("error", (error) => {
    console.log("error while connecting with the database", error.message);
  });
};

export default connection;
