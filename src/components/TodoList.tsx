import React from 'react'

interface TodoListProps {
    todos: any[]
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return (
        <ul>
            {todos.map(item => {
                return (
                    <li className='todo'>
                        <label>
                            <input type='checkbox'></input>
                            <span>item</span>
                            <button>X</button>
                        </label>
                    </li>
                )
            })
            }

        </ul>
    )
}