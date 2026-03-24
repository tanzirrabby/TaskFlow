import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    assignee: { type: String, required: true },
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
    dueDate: { type: String, required: true }
  },
  { _id: false }
);

const columnSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    tasks: [taskSchema]
  },
  { _id: false }
);

const activitySchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    message: { type: String, required: true },
    at: { type: Date, default: Date.now }
  },
  { _id: false }
);

const boardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    team: [{ type: String }],
    columns: [columnSchema],
    activity: [activitySchema]
  },
  { timestamps: true }
);

export const Board = mongoose.model('Board', boardSchema);
