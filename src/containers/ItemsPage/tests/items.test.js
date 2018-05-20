import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';

import ItemsPage, { mapDispatchToProps } from '../index';
import ItemCreator from '../../../components/ItemCreator';
import ItemsList from '../../../components/ItemsList';
import ItemsFilter from '../../../components/ItemsFilter';

const defaultProps = {
  items: [],
  filterBy: 'None'
};

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {
  todos: {
    items: [],
    filterBy: 'None'
  }
};

describe('<ItemsPage />', () => {
  let renderedItem;
  
  beforeEach(() => {
    renderedItem = mount(
      <Provider store={mockStore(initialState)}>
        <ItemsPage />
      </Provider>
    )
  });

  it('should match its empty snapshot', () => {
    expect(TestRenderer.create(
      <Provider store={mockStore(initialState)}>
        <ItemsPage {...defaultProps} />
      </Provider>
    ).toJSON()).toMatchSnapshot();
  });

  it('should render items correctly', () => {
    expect(renderedItem.hasClass('items')).toBeTruthy();
    expect(renderedItem.find(ItemsPage)).toHaveLength(1);
    expect(renderedItem.find(ItemCreator).length).toBe(1);
    expect(renderedItem.find(ItemsList)).toHaveLength(1);
    expect(renderedItem.find(ItemsFilter)).toHaveLength(1);
  });

  it('should call onAdd action with correct result', () => {
    const title = 'add Item title';
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onAdd(title);
    expect(dispatch.mock.calls[0][0]).toEqual({ 
      type: 'qgo/assessment/ADD_ITEM', 
      content: title
    });  
  });

  it('should call deleteItem action with correct id', () => {
    const id = 10;
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onDelete(id);
    expect(dispatch.mock.calls[0][0]).toEqual({ 
      type: 'qgo/assessment/DELETE_ITEM', 
      id
    });  
  });

  it('should call onToggle action with correct id', () => {
    const id = 10;
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onToggle(id);
    expect(dispatch.mock.calls[0][0]).toEqual({ 
      type: 'qgo/assessment/TOGGLE_ITEM', 
      id
    });  
  });

  it('should call setFilterBy action with correct filter', () => {
    const filterBy = 'Done';
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onFilter(filterBy);
    expect(dispatch.mock.calls[0][0]).toEqual({ 
      type: 'qgo/assessment/SET_FILTERBY', 
      filterBy
    });  
  });
});
