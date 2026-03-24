import { Board } from '../models/Board.js';

export async function getBoard(req, res) {
  const board = await Board.findById(req.params.boardId);
  if (!board) return res.status(404).json({ message: 'Board not found.' });
  return res.json(board);
}

export async function createTask(req, res) {
  const { columnId, task } = req.body;
  const board = await Board.findById(req.params.boardId);

  if (!board) return res.status(404).json({ message: 'Board not found.' });

  const column = board.columns.find((item) => item.id === columnId);
  if (!column) return res.status(404).json({ message: 'Column not found.' });

  column.tasks.unshift(task);
  board.activity.unshift({
    id: `activity-${Date.now()}`,
    message: `${task.assignee} created “${task.title}”`,
    at: new Date()
  });

  await board.save();
  return res.status(201).json(board);
}

export async function moveTask(req, res) {
  const { sourceColumnId, targetColumnId, taskId } = req.body;

  const board = await Board.findById(req.params.boardId);
  if (!board) return res.status(404).json({ message: 'Board not found.' });

  const sourceColumn = board.columns.find((column) => column.id === sourceColumnId);
  const targetColumn = board.columns.find((column) => column.id === targetColumnId);

  if (!sourceColumn || !targetColumn) {
    return res.status(404).json({ message: 'Source or target column not found.' });
  }

  const taskIndex = sourceColumn.tasks.findIndex((task) => task.id === taskId);
  if (taskIndex === -1) return res.status(404).json({ message: 'Task not found.' });

  const [task] = sourceColumn.tasks.splice(taskIndex, 1);
  targetColumn.tasks.unshift(task);

  board.activity.unshift({
    id: `activity-${Date.now()}`,
    message: `${task.assignee} moved “${task.title}” to ${targetColumn.title}`,
    at: new Date()
  });

  await board.save();
  return res.json(board);
}
