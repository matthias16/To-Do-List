import React, { useState } from 'react';
import { Button }  from '@material-ui/core';


const ToDoForm = ({ addTask }) => 
{

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => 
    {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <Button variant="contained" color="secondary" style={{margin: '20px'}} onClick={ handleSubmit }> Submit </Button>
        </form>
    );
};

export default ToDoForm;