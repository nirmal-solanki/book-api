import { NextFunction, Request, Response, Router } from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "../controllers/book";

const BookRoutes = (router: Router) => {
  router
    .route("/books")
    .get((req: Request, res: Response, next: NextFunction) => {
      // #swagger.tags = ['Books']
      // #swagger.description = 'GET all books'
      /* #swagger.responses[200] = { 
        schema: {
            status: "success",
            data: [{ "$ref": "#/definitions/Book" }]
        }
      }*/
      /* #swagger.responses[500] = { 
            schema: {
                status: "error",
                message: {"type": "string"},
                code: {"type": "string"}
            }
      }*/
      return getAllBooks(req, res, next);
    })
    .post((req: Request, res: Response, next: NextFunction) => {
      // #swagger.tags = ['Books']
      // #swagger.description = 'Create book'
      /* #swagger.parameters['body'] = {
          in: 'body',
          description: 'Book information.',
          required: true,
          schema: {
            "title": "White Noise",
            "author": "Don DeLillo",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar vitae eros id fringilla."
          }
      }*/
      /* #swagger.responses[201] = { 
            schema: {
                status: "success",
                data: { "$ref": "#/definitions/Book" }
            }
      }*/
      /* #swagger.responses[400] = { 
            schema: {
            status: "error",
            message: {"type": "string"},
            code: {"type": "string"}
            }
      }*/
      /* #swagger.responses[404] = { 
            schema: {
            status: "error",
            message: {"type": "string"},
            code: {"type": "string"}
            }
      }*/
      /* #swagger.responses[500] = { 
            schema: {
            status: "error",
            message: {"type": "string"},
            code: {"type": "string"}
            }
      }*/
      return createBook(req, res, next);
    });

  router
    .route("/books/:id")
    .get((req: Request, res: Response, next: NextFunction) => {
      // #swagger.tags = ['Books']
      // #swagger.description = 'GET single book by id'
      /* #swagger.parameters['id'] = {
          in: 'path',
          description: 'Book ID.',
          required: true
      }*/
      /* #swagger.responses[200] = { 
            schema: {
                status: "success",
                data: { "$ref": "#/definitions/Book" }
            }
      }*/
      /* #swagger.responses[400] = { 
            schema: {
              status: "error",
              message: {"type": "string"},
              code: {"type": "string"}
            }
      }*/
      /* #swagger.responses[404] = { 
            schema: {
              status: "error",
              message: {"type": "string"},
              code: {"type": "string"}
            }
      }*/
      /* #swagger.responses[500] = { 
            schema: {
              status: "error",
              message: {"type": "string"},
              code: {"type": "string"}
            }
      }*/
      return getBookById(req, res, next);
    })
    .put((req: Request, res: Response, next: NextFunction) => {
      // #swagger.tags = ['Books']
      // #swagger.description = 'Update book by ID'
      /* #swagger.parameters['id'] = {
          in: 'path',
          description: 'Book ID.',
          required: true
      }*/
      /* #swagger.parameters['body'] = {
          in: 'body',
          description: 'Book information.',
          required: true,
          schema: {
            "title": "White Noise",
            "author": "Don DeLillo",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar vitae eros id fringilla."
          }
      }*/
      /* #swagger.responses[200] = { 
          schema: {
            status: "success",
            data: { "$ref": "#/definitions/Book" }
          }
      }*/
      /* #swagger.responses[400] = { 
          schema: {
            status: "error",
            message: {"type": "string"},
            code: {"type": "string"}
          }
      }*/
      /* #swagger.responses[500] = { 
          schema: {
            status: "error",
            message: {"type": "string"},
            code: {"type": "string"}
          }
      }*/
      return updateBook(req, res, next);
    })
    .delete((req: Request, res: Response, next: NextFunction) => {
      // #swagger.tags = ['Books']
      // #swagger.description = 'Delete book by ID'
      /* #swagger.parameters['id'] = {
          in: 'path',
          description: 'Book ID.',
          required: true
      }*/
      /* #swagger.responses[200] = { 
          schema: {status: "success"}
      }*/
      /* #swagger.responses[400] = { 
          schema: {
            status: "error",
            message: {"type": "string"},
            code: {"type": "string"}
          }
      }*/
      /* #swagger.responses[500] = { 
          schema: {
            status: "error",
            message: {"type": "string"},
            code: {"type": "string"}
          }
      }*/
      return deleteBook(req, res, next);
    });

  return router;
};

export { BookRoutes };
