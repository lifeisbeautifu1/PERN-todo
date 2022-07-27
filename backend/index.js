import express from 'express';
import 'express-async-errors';
import 'colors';

import todoRouter from './routes/todo.js';
import errorHandlerMiddleware from './middleware/error.js';

const app = express();

app.use(express.json());

app.use('/api/todos', todoRouter);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgGreen);
});
