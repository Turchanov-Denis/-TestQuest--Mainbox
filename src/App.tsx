import React, { useEffect, useState } from 'react';
import './sass/style.scss'
import { TodosForm } from './components/TodosForm'
import { TodoList } from './components/TodoList';
import { todoArray } from './interfaces'
import { ActionBar } from './components/ActionBar';

const App: React.FC = () => {

  const [todos, setTodos] = useState<todoArray[]>([])

  const addHandler = (title: string) => {
    if (title !== '') {
      const todo = {
        id: Date.now(),
        title: title,
        complited: false
      }
      setTodos(prev => [todo, ...prev])
    }
  }
  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(item => {
      if (item.id === id) {
        console.log("awd", item)
        item.complited = !item.complited
      }
      return item
    }))
  }

  const removeHandler = (id: number) => {
    setTodos(prev => prev.filter(item => item.id !== id))
  }

  useEffect(() => {
    console.log(localStorage.getItem('todos'))
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as todoArray[]
    setTodos(saved)
  }, [])
  useEffect(() => { localStorage.setItem('todos', JSON.stringify(todos)) }, [todos])
  return (
    <div className='wrapper'>
      <TodosForm addHandler={addHandler}></TodosForm>
      <TodoList toggleHandler={toggleHandler} removeHandler={removeHandler} todos={todos}></TodoList>
      <ActionBar todos={todos}></ActionBar>
    </div>
  );
}

export default App;
