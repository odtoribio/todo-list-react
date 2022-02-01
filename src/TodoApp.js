import React from 'react';
import { useState, useRef } from 'react';
import { buildItem, resetInput } from './helpers/helpers';
import TaskList  from './components/TaskList';

export const TodoApp = () => {

  const [tasks, setTasks] = useState([])
  const inputRef = useRef()
  let todoTask = "";

  const addListItem = () => {
    if (todoTask) setTasks( oldValue => [...oldValue, todoTask])
    resetInput(inputRef)
  }

  const hadleInputValue = (e) => {
    const newTask = buildItem(e.target.value);
    todoTask = newTask;
  }

  const removeListItem = id => {
    const tasksUpdated = tasks.filter( task => task.id !== id)
    setTasks(tasksUpdated)
  }

  const toggleTaskIsDone = id => {
    const taskToUpdate = tasks.find( task => task.id === id)
    taskToUpdate.isDone = !taskToUpdate.isDone;
    setTasks( oldTasks => oldTasks.map( task => task.id === id ? taskToUpdate : task ))
  }

  return (
    <div className='container mt-5'>
      <h1>Todo List</h1>
      <div className='input-group mt-3'>
          <input onChange={hadleInputValue} ref={inputRef} type="text" className='form-control'/>
          <button className='btn btn-primary' onClick={addListItem}>Add</button>
      </div>
      { tasks.length > 0 && (
          <div className='card mt-3'>
            <TaskList 
              tasks={tasks} 
              removeListItem={removeListItem} 
              toggleTaskIsDone={toggleTaskIsDone}
            />
          </div>
        )
      }
    </div>
  );
};
