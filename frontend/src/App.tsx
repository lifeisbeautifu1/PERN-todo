import Input from './components/Input';
import Todo from './components/Todo';
import { useEffect } from 'react';
import axios from 'axios';
import { useAppContext } from './context';

function App() {
  const { todos, setTodos } = useAppContext();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data } = await axios.get('/todos');
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, [setTodos]);

  return (
    <div className="bg-gray-100 h-screen w-screen">
      <nav className="w-full bg-white p-4 shadow flex justify-center">
        <h1 className="text-2xl font-bold text-blue-500">PERN todo app</h1>
      </nav>
      <div className="w-4/5 m-auto py-12 flex flex-col gap-20">
        <Input />
        <div className="flex flex-col gap-4 items-center">
          {todos &&
            todos.map((todo) => <Todo todo={todo} key={todo.todo_id} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
