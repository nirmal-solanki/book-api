import dotenv from "dotenv";
import path from "path";

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : null;
dotenv.config({ path: `.env.${NODE_ENV || "development"}` });

import { development } from "./development";
import { staging } from "./staging";

const defaults = {
  port: process.env.PORT || 3000,
  root: path.normalize(__dirname + "/.."),
  db: {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
  jwtSecret: process.env.JWT_SECRET,
};

export const env = {
  development: Object.assign({}, defaults, development),
  staging: Object.assign({}, defaults, staging),
}[NODE_ENV || "development"];
