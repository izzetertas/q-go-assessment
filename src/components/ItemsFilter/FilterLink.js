import React from 'react';
import PropTypes from 'prop-types';
import './FilterLink.css';

const FilterLink = ({ filterBy, title, onClick}) => {
  const handleOnClick = e => {
    e.preventDefault();
    onClick(title);
  };
  return (
    <div className="filterLink-wrapper">
      {filterBy === title
          ? <span className="filterLink-span">{title}</span>
          : <a href="" className="filterLink-anchor" onClick={handleOnClick}>
            {title}
          </a>
      }
    </div>
  );
};

FilterLink.propTypes = {
  filterBy: PropTypes.oneOf([
    'None', 
    'All', 
    'Done', 
    'Waiting'
  ]).isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
FilterLink.defaultProps = {
  filterBy: 'None'
};

export default FilterLink;
