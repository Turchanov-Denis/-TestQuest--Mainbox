import React from 'react'
import { idText } from 'typescript'
import { todoArray } from '../interfaces'

interface ActionBarProps {
    todos: todoArray[],
    clearComplited(): void,
    actionFilter: string,
    filterHandler(filter: string): void,
}

export const ActionBar: React.FC<ActionBarProps> = ({ todos, clearComplited, actionFilter, filterHandler }) => {

    return (
        <div className='action'>

            <div className='action-title'> {todos.reduce(function (previousValue: number, current: any) {
                if (current.complited == false) {
                    return previousValue + 1
                }
                return previousValue
            }, 0)} items left</div>

            <div>
                <button onClick={() => filterHandler('all')} className='action-button action-button-active'>All</button>
                <button onClick={() => filterHandler('active')} className='action-button'>Active</button>
                <button onClick={() => filterHandler('completed')} className='action-button'>completed</button>
            </div>

            <button onClick={clearComplited} className='action-button'>Clear completed</button>
        </div>
    )

}