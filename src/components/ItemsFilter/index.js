import React from 'react';
import PropTypes from 'prop-types';

import FilterLink from './FilterLink';


const ItemsFilter = ({ filterBy, onFilter, totalItems }) => {
  const handleOnClick = (filter) => {
    onFilter(filter);
  };

  return (
    <div>
      <div className="itemsFilter">
        <span className="itemsFilter-total">
          {totalItems > 0 && `${totalItems} items`}
        </span>
        {filterBy !== 'None' &&
          <div>
            <FilterLink
                filterBy={filterBy}
                title="All"
                onClick={handleOnClick} /> | {' '}
            <FilterLink
                filterBy={filterBy}
                title="Done"
                onClick={handleOnClick} /> | {' '}
            <FilterLink
                filterBy={filterBy}
                title="Waiting"
                onClick={handleOnClick} />
          </div>
        }
      </div>

    </div>
  );
};

ItemsFilter.propTypes = {
  filterBy: PropTypes.oneOf([
    'None', 
    'All', 
    'Done', 
    'Waiting'
  ]).isRequired,
  onFilter: PropTypes.func.isRequired
};
ItemsFilter.defaultProps = {
  filterBy: 'None'
};

export default ItemsFilter;
