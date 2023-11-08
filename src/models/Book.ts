import mongoose, { Document } from "mongoose";

export interface IBook extends Document {
  title: string;
  author: string;
  summary: string;
}

const bookSchema = new mongoose.Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    summary: { type: String, required: true },
  },
  { versionKey: false }
);

export default mongoose.model<IBook>("Book", bookSchema);
