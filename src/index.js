//this is the entry point of your app
//this is where you start the server
//load env variables
//connect db
import connectDB from "./config/db";
import dotenv from "dotenv";
import app from "./app";

dotenv.config({
  path: "./env",
});

const StartServer = async () => {
  try {
    await connectDB();
    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });
    app.listen(process.env.PORT);
  } catch (error) {
    console.log("mogodb connection failed", error);
  }
};

StartServer();
