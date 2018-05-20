import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItem, toggleItem, deleteItem, setFilterBy } from './actions';
import ItemCreator from '../../components/ItemCreator';
import ItemsList from '../../components/ItemsList';
import ItemsFilter from '../../components/ItemsFilter';
import './styles.css';


class ItemsPage extends Component {
  handleOnAdd = title => {
    this.props.onAdd(title);
  };
  handleOnToggle = id => {
    this.props.onToggle(id);
  };
  handleOnDelete = id => {
    this.props.onDelete(id);
  };
  handleOnFilter = filterBy => {
    this.props.onFilter(filterBy);
  }
  getFilteredTodos = todo => {
    return this.props.filterBy === 'All' || 
      (this.props.filterBy === 'Done' && todo.isDone) ||
      (this.props.filterBy === 'Waiting' && !todo.isDone)
      ? true
      : false;
  }
  render() {
    return (
      <div className="items">
        <ItemCreator 
          onAdd={this.handleOnAdd}
        />
        <ItemsList 
          items={this.props.items.filter(this.getFilteredTodos)}  
          onToggle={this.handleOnToggle}
          onDelete={this.handleOnDelete}
        />
        <ItemsFilter 
          filterBy={this.props.filterBy}
          onFilter={this.handleOnFilter}
          totalItems={this.props.items.length}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    items: state.todos.items,
    filterBy: state.todos.filterBy
  };
};

export const mapDispatchToProps = dispatch => ({
  onAdd: newItem => dispatch(addItem(newItem)),
  onToggle: id => dispatch(toggleItem(id)),
  onDelete: id => dispatch(deleteItem(id)),
  onFilter: filterBy => dispatch(setFilterBy(filterBy))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ItemsPage);
