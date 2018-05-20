import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ItemDetail = ({ item, onDelete, onToggle }) => (
  <li className="itemDetail-li">
    <input
      className="itemDetail-toggle"
      type="checkbox"
      checked={item.isDone}
      onChange={() => onToggle(item.id)}
    />
    <span className={item.isDone ? 'item-done' : ''}>{item.content}</span>
    <input
      type="button"
      className="itemDetail-delete"
      value="X"
      onClick={() => onDelete(item.id)} />
  </li>
);

ItemDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired
  }),
  onToggle: PropTypes.func.isRequired
};

export default ItemDetail;
