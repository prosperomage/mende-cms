import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONDODB_URI}`,
    );
    console.log(`db is activee!!!! ${connectionInstance.connection.host} `);
  } catch (error) {
    console.log("mongodb connectin failed", error);
    process.exit(1);
  }
};

ConnectDB();
