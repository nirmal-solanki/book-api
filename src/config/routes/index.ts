import express, {
  Application,
  Router,
  Request,
  Response,
  NextFunction,
} from "express";
import swaggerUi from "swagger-ui-express";

const swaggerFile = require("../swagger/swagger-output.json");

import { ERROR, NOT_FOUND } from "../../constants";
import { basicAuthMiddleware } from "../../middleware";
import { BookRoutes } from "../../routes/books";

export const Routes = (app: Application): void => {
  app.get("/", (req, res) => {
    // #swagger.ignore = true
    return res.redirect("/api-docs");
  });

  const router: Router = express.Router();
  app.use(BookRoutes(router));

  /* Middlewares */
  app.use(router);
  app.use(
    "/api-docs",
    basicAuthMiddleware,
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile)
  );

  /**
   * Error handling
   */
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    let STATUS_CODE = 500;

    // treat as 404
    if (err.message && ~err.message.indexOf("not found")) {
      STATUS_CODE = 404;
    }

    // Send error to API
    res
      .status(STATUS_CODE)
      .json({ status: ERROR, code: (err as any).code, message: err.message });
  });

  // assume 404 since no middleware responded
  app.use((req: Request, res: Response) => {
    res.status(404).json({ status: ERROR, message: NOT_FOUND });
  });
};
