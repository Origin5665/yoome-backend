import { Schema, Document } from 'mongoose';

export interface Todo extends Document {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const TodoSchema = new Schema<Todo>(
  {
    title: String,
    description: String,
    completed: Boolean,
  },
  { timestamps: true }, // Automatically adds createdAt and updatedAt fields
);
