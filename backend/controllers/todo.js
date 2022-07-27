import pool from '../db/db.js';

export const createTodo = async (req, res) => {
  const { description } = req.body;
  const newTodo = await pool.query(
    'INSERT INTO todo (description) VALUES($1) RETURNING *',
    [description]
  );
  res.status(200).json(newTodo.rows[0]);
};

export const getTodos = async (req, res) => {
  const todos = await pool.query('SELECT * FROM todo');
  res.status(200).json(todos.rows);
};

export const getTodo = async (req, res) => {
  const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [
    req.params.id,
  ]);
  res.status(200).json(todo.rows[0]);
};

export const updateTodo = async (req, res) => {
  await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [
    req.body.description,
    req.params.id,
  ]);
  const updatedTodo = await pool.query(
    'SELECT * FROM todo WHERE todo_id = $1',
    [req.params.id]
  );
  res.status(200).json(updatedTodo.rows[0]);
};

export const deleteTodo = async (req, res) => {
  await pool.query('DELETE FROM todo WHERE todo_id = $1', [req.params.id]);
  res.status(200).json({ message: 'Todo was deleted' });
};
