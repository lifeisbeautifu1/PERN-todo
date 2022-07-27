import express from 'express';

import {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} from '../controllers/todo.js';

const router = express.Router();

router.post('/', createTodo);

router.get('/', getTodos);

router.get('/:id', getTodo);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router;
