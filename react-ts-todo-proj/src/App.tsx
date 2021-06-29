// import { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';
// import Todo from './models/Todo';


function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);

  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);

  //   // The concat() method is used to merge two or more arrays. 
  //   // This method does not change the existing arrays, 
  //   // but instead returns a new array.
  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo);
  //   });
  // };

  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter(todo => todo.id !== todoId);
  //   });
  // };

  return (
    <TodosContextProvider>
      <div>
        <NewTodo/>
        <Todos/>
      </div>
    </TodosContextProvider>
  );
}

export default App;