import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const ListItem = ({ id, title, isDone, removeListItem, toggleTaskIsDone }) => {

  const lineThroughStyle = isDone ? {textDecoration: "line-through"} : {}

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <span style={lineThroughStyle}>{ title }</span>
      <div>
        <Button
          title={isDone ? 'UNDO' : 'DONE'} 
          type={isDone ? 'warning' : 'success'}
          executeAction={() => toggleTaskIsDone(id)}
          marginEndValue={2}
        />
        <Button
          title="❌" 
          type="light"
          executeAction={() => removeListItem(id)}
        />
      </div>
    </li> 
  )
};

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  removeListItem: PropTypes.func.isRequired,
  toggleTaskIsDone: PropTypes.func.isRequired
}

export default ListItem;
