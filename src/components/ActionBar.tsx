import React from 'react'
import { idText } from 'typescript'
import { todoArray } from '../interfaces'

interface ActionBarProps {
    todos: todoArray[],
}

export const ActionBar: React.FC<ActionBarProps> = ({ todos }) => {

    return (
        <div className='action'>

            <div className='action-title'> {todos.reduce(function (previousValue: number, current: any) {
                if (current.complited == false) {
                    return previousValue+1
                }
                return previousValue
            }, 0)}</div>

            <div>
                <button className='action-button action-button-active'>All</button>
                <button className='action-button'>Active</button>
                <button className='action-button'>Complited</button>
            </div>

            <button className='action-button'>Clear complited</button>
        </div>
    )

}