import React from 'react'
import { todoArray } from '../interfaces'
interface TodoListProps {
    todos: todoArray[],
    toggleHandler(id: number): void,
    removeHandler(id: number): void,
}

export const TodoList: React.FC<TodoListProps> = ({ todos, removeHandler, toggleHandler }) => {


    return (
        <ul style={{ 'paddingTop': '15px' }}>
            {todos.map(item => {

                return (
                    <li className={item.complited ? 'todo todo-complited' : 'todo'} key={item.id}>
                        <label>
                            <input onChange={() => toggleHandler(item.id)} type='checkbox' checked={item.complited} ></input>

                            <span>{item.title}</span>
                            <button onClick={() => removeHandler(item.id)}>X</button>

                        </label>
                    </li>


                )
            })
            }

        </ul>
    )
}
