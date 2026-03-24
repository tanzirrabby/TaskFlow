import { Router } from 'express';
import { createTask, getBoard, moveTask } from '../controllers/boardController.js';

const router = Router();

router.get('/:boardId', getBoard);
router.post('/:boardId/tasks', createTask);
router.patch('/:boardId/tasks/:taskId/move', moveTask);

export default router;
