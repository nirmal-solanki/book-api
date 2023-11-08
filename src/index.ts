import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import connect from "./config/database";
import { env } from "./config/env";
import { Routes } from "./config/routes";

const app = express();

// Middleware
app.use(bodyParser.json());

(async () => {
  try {
    // Connect to the HANA DB
    await connect();

    // Mount routers
    Routes(app);

    // Start the server
    app.listen(env?.port, () => {
      console.log(`Server running on http://localhost:${env?.port}`);
    });
  } catch (err) {
    console.error("Failed to start the server:", err);
    process.exit(1);
  }
})();
