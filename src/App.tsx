import React, { useEffect, useState } from 'react';
import './sass/style.scss'
import { TodosForm } from './components/TodosForm'
import { TodoList } from './components/TodoList';
import { todoArray } from './interfaces'
import { ActionBar } from './components/ActionBar';

const App: React.FC = () => {

  const [todos, setTodos] = useState<todoArray[]>([])
  const [actionFilter, setActionFilter] = useState<string>('all')
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

  const clearComplited = () => {
    setTodos(prev => prev.filter(item => item.complited == false))
  }
  const filterHandler = (filter: string) => {
    setActionFilter(filter)
  }
  // const filterArray = () => {
  //   if (actionFilter === 'all') {
  //     return todos
  //   }
  //   if (actionFilter === 'active') {
  //     return todos.filter(item => item.complited == false)
  //   }
  //   if (actionFilter === 'completed') {
  //     return todos.filter(item => item.complited == true)
  //   }
  // }

  useEffect(() => {
    console.log(localStorage.getItem('todos'))
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as todoArray[]
    setTodos(saved)
  }, [])
  useEffect(() => { localStorage.setItem('todos', JSON.stringify(todos)) }, [todos])



  return (
    <div className='wrapper'>
      <TodosForm addHandler={addHandler}></TodosForm>
      <TodoList toggleHandler={toggleHandler} removeHandler={removeHandler} todos={todos.filter(item => {
        if (actionFilter === 'all') {
          return true
        }
        if ((actionFilter === 'active') && (item.complited == false)) {
          return true
        }
        if ((actionFilter === 'completed') && (item.complited == true)) {
          return true
        }
        return false
      })} actionFilter={actionFilter}></TodoList>
      <ActionBar actionFilter={actionFilter} filterHandler={filterHandler} clearComplited={clearComplited} todos={todos}></ActionBar>
    </div >
  );
}

export default App;
