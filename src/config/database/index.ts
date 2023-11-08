import mongoose from "mongoose";
import { env } from "../env";

const connect = async () => {
  try {
    const username = env?.db.username; // Replace with your MongoDB username
    const password = env?.db.password; // Replace with your MongoDB password
    const host = env?.db.host; // Replace with the MongoDB host or cloud provider URL
    const databaseName = env?.db.name; // Replace with your database name

    const databaseUrl = `mongodb+srv://${username}:${password}@${host}/${databaseName}?retryWrites=true&w=majority`;

    await mongoose.connect(databaseUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connect;
