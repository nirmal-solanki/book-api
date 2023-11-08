import swaggerAutogen from "swagger-autogen";
import { env } from "../env";

const doc = {
  info: {
    version: "1.0.0",
    title: "Books APIs",
    description: "API Documentation.",
  },
  host: env?.swagger.host,
  basePath: "/",
  schemes: env?.swagger.schemes,
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [],
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header", // Can be "header", "query" or "cookie"
      name: "Authorization", // Name of the header, query parameter or cookie
      description:
        "Enter the token with the `Bearer: ` prefix, e.g. 'Bearer <YOUR TOKEN>'",
    },
  },
  definitions: {
    Book: {
      _id: { type: "string" },
      title: { type: "string" },
      author: { type: "string" },
      summary: { type: "string" },
    },
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["../routes/index.ts"];
swaggerAutogen()(outputFile, endpointsFiles, doc);
