import { NextFunction, Request, Response } from "express";
import Book from "../models/Book";
import { BAD_REQUEST, ERROR, SUCCESS } from "../constants";

// Create a new book
const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body) {
      res.status(400).json({ status: ERROR, message: BAD_REQUEST });
    }
    const book = new Book(req.body);
    const data = await book.save();
    res.status(201).json({ status: SUCCESS, data });
  } catch (err: any) {
    next(err);
  }
};

// Get a list of all books
const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await Book.find();
    res.status(200).json({ status: SUCCESS, data });
  } catch (err: any) {
    next(err);
  }
};

// Get details of a specific book by ID
const getBookById = async (req: Request, res: Response, next: NextFunction) => {
  const bookId = req.params.id;
  try {
    if (!req.params.id) {
      res.status(400).json({ status: ERROR, message: BAD_REQUEST });
    }
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ status: ERROR, message: "Book not found" });
    }
    res.json(book);
  } catch (err: any) {
    next(err);
  }
};

// Update a book's details by ID
const updateBook = async (req: Request, res: Response, next: NextFunction) => {
  const bookId = req.params.id;
  try {
    if (!req.params.id) {
      res.status(400).json({ status: ERROR, message: BAD_REQUEST });
    }
    if (!req.body) {
      res.status(400).json({ status: ERROR, message: BAD_REQUEST });
    }
    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ status: ERROR, message: "Book not found" });
    }
    res.json(updatedBook);
  } catch (err: any) {
    next(err);
  }
};

// Delete a book by ID
const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  const bookId = req.params.id;
  try {
    if (!req.params.id) {
      res.status(400).json({ status: ERROR, message: BAD_REQUEST });
    }
    const deletedBook = await Book.deleteOne({ _id: bookId });
    if (!deletedBook) {
      return res.status(404).json({ status: ERROR, message: "Book not found" });
    }
    res.json({ message: "Book deleted" });
  } catch (err: any) {
    next(err);
  }
};

export { createBook, getAllBooks, getBookById, updateBook, deleteBook };
