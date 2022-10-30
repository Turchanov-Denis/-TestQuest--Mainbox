import React from 'react'
import {useState} from 'react'
import TextField from '@mui/material/TextField';
export const TodosForm: React.FC<any> = () => {

    const [title,setTitle] = useState<string>('todos')

    return (
        <div className='todo-form'>
            <h1>{title}</h1>
            <TextField id="standard-basic" label="Standard" variant="standard" />

        </div>
    )
}