import { Request, Response, NextFunction } from "express";
const BASIC_AUTH = require("basic-auth");

const basicAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = BASIC_AUTH(req);
  if (
    !user ||
    user.name !== "admin" ||
    user.pass !== `admin@${new Date().getDate()}`
  ) {
    res.statusCode = 401;
    res.setHeader("WWW-Authenticate", 'Basic realm="BOOKS"');
    res.end("Unauthorized");
  } else {
    next();
  }
};

export { basicAuthMiddleware };
