import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import ItemDetail from '../ItemDetail'


const ItemsList = ({ items, onToggle, onDelete }) => (
  <div className="itemsList">
    <ul className="itemsList-ul">
      {items && items.length < 1 && 
        <p id="items-missing">Add some tasks above.</p>
      }
      {items && items.map(item => 
        <ItemDetail
          key={item.id} 
          item={item} 
          onDelete={id => onDelete(id)}
          onToggle={id => onToggle(id)} />
      )}
    </ul>
  </div>
);

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default ItemsList;
