import mongoose, { Model, Schema } from "mongoose";

const todoSchema = new Schema({
    title: String,
    content: String,
    is_completed: Boolean, 
});

export const TodoModel: Model<any> = mongoose.model("Todo", todoSchema);


