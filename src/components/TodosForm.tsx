import React from 'react'
import { useState } from 'react'

interface TodoFormProps {
    addHandler(title: string): void,

}

export const TodosForm: React.FC<TodoFormProps> = ({ addHandler }) => {

    const [title, setTitle] = useState<string>('')


    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key == 'Enter') {
            console.log(title)
            setTitle('')
            addHandler(title)
        }

    }
    return (
        <div className='todo-form'>
            <h1>todos</h1>
            <input value={title} onChange={changeHandler} onKeyPress={keyPressHandler} placeholder='Create your note' />

        </div>
    )
}