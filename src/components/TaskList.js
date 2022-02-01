import React from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

const TaskList = ({ tasks, removeListItem, toggleTaskIsDone }) => {
  return (
    <ul className='list-group'>
      {
        tasks.map(task => (
          <ListItem
            id={task.id}
            title={task.title}
            isDone={task.isDone}
            key={task.id}
            removeListItem={removeListItem}
            toggleTaskIsDone={toggleTaskIsDone}
          />
        ))
      }
    </ul>
  )
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  removeListItem: PropTypes.func.isRequired,
  toggleTaskIsDone: PropTypes.func.isRequired
}

export default TaskList;
