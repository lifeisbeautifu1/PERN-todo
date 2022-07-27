import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context';
import axios from 'axios';

const Input = () => {
  const { todos, setTodos, isEdit, setIsEdit, selectedId } = useAppContext();

  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!isEdit) {
        const { data } = await axios.post('/todos/', {
          description,
        });
        setTodos((prevState) => {
          return [data, ...prevState];
        });
      } else {
        const { data } = await axios.patch('/todos/' + selectedId, {
          description,
        });
        setTodos((prevState) => {
          return prevState.map((todo) => {
            return todo.todo_id === selectedId ? data : todo;
          });
        });
        setIsEdit(false);
      }
    } catch (error) {
      console.log(error);
    }
    setDescription('');
  };

  useEffect(() => {
    isEdit
      ? setDescription(
          todos.find((todo) => todo.todo_id === selectedId)?.description!
        )
      : setDescription('');
  }, [selectedId, todos, isEdit]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex justify-center items-center shadow"
    >
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="flex-[0.8] text-xl outline-none p-2 px-4 w-full rounded-tl rounded-bl"
      />
      <button
        type="submit"
        className="flex-[0.2] text-xl font-[500] bg-blue-400 text-white p-2 rounded-tr rounded-br hover:bg-blue-500 transition duration-300"
      >
        {isEdit ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default Input;
