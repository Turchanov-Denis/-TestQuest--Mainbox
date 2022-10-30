import React, { useState } from 'react';
import './sass/style.scss'
import { TodosForm } from './components/TodosForm'
import { TodoList } from './components/TodoList';
const App: React.FC = () => {

  const [todos, setTodos] = useState<any[]>([])

  const addHandler = (title: string) => {
    const todo = {
      id: Date.now(),
      title: title,
      complited: false
    }
    setTodos(prev => [todo, ...prev])
  }

  return (
    <div className='wrapper'>
      <TodosForm addHandler={addHandler}></TodosForm>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
