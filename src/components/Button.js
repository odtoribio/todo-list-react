import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({executeAction, type, title, marginEndValue = 0 }) => {
  return (
    <button 
      className={`btn btn-${type} btn-sm me-${marginEndValue}`} 
      onClick={executeAction}
    >
      { title }
    </button>
  );
};

Button.propTypes = {
  executeAction: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  marginEndValue: PropTypes.number
}

export default Button;
