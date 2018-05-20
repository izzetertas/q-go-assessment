import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ItemCreator = ({ onAdd }) => {
  let inputField;
  const handleOnSubmit = e => {
    e.preventDefault();
    if(inputField.value) {
      onAdd(inputField.value);
      inputField.value = '';
    }
  };

  return (
    <div className="itemCreator">
      <form onSubmit={handleOnSubmit}>
        <input
          ref={input => {
            inputField = input;
          }}
          className="itemCreator-input"
          type="text"
          placeholder="What do you need to do?"
        />
        <input
          className="itemCreator-button"
          type="button"
          value="Add Task"
          onClick={handleOnSubmit}
        />
      </form>
    </div>
  );
};
ItemCreator.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ItemCreator;
