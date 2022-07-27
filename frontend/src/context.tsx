import { useContext, createContext, useState } from 'react';
import { ITodo } from './interfaces';

interface IContext {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  selectedId: number | null;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<IContext>({} as IContext);

type Props = {
  children: React.ReactNode;
};

const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <AppContext.Provider
      value={{ todos, setTodos, selectedId, setSelectedId, isEdit, setIsEdit }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
