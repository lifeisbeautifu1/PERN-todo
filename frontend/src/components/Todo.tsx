import React from 'react';
import { ITodo } from '../interfaces';
import { useAppContext } from '../context';
import axios from 'axios';

type TodoProps = {
  todo: ITodo;
};

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const { setTodos, setIsEdit, setSelectedId } = useAppContext();
  const handleDelete = async () => {
    try {
      await axios.delete('/todos/' + todo.todo_id);
      setTodos((prevState) => {
        return prevState.filter((t) => t.todo_id !== todo.todo_id);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = () => {
    setIsEdit(true);
    setSelectedId(todo.todo_id);
  };
  return (
    <div className="bg-white min-w-[200px] rounded shadow px-4 py-2 flex items-center gap-4 justify-between">
      <h1>{todo.description}</h1>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-500/90"
      >
        Delete
      </button>
      <button
        className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-500/90"
        onClick={handleEdit}
      >
        Edit
      </button>
    </div>
  );
};

export default Todo;
