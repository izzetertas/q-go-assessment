// import { fromJS } from 'immutable';

import {
  ADD_ITEM,
  DELETE_ITEM,
  TOGGLE_ITEM,
  SET_FILTERBY
} from './constants';

export const initialState = { // fromJS({
  items: [
    { id: 1, content: 'Call mum', isDone: false },
    { id: 2, content: 'Buy cat food', isDone: false },
    { id: 3, content: 'Water the plants', isDone: false },
  ],
  filterBy: 'All'
}; // );

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const nextId = state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1,
        newItem = {
          id: nextId,
          content: action.content,
          isDone: false
        },
        filterBy = state.items.length === 0 ? 'All' : state.filterBy;

      return {
        ...state,
        items: [...state.items, newItem],
        filterBy
      };
    }
    case DELETE_ITEM: {
      const items = state.items.filter(i => i.id !== action.id),
        filterBy = items.length === 0 ? 'None' : state.filterBy;
      return {
        ...state,
        items,
        filterBy
      };
    }
    case TOGGLE_ITEM: {
      return {
        ...state,
        items: state.items.map(item =>
          (item.id === action.id)
            ? {...item, isDone: !item.isDone}
            : item
        )
      };
    }
    case SET_FILTERBY: {
      return {
        ...state,
        filterBy: action.filterBy
      };
    }
    default:
      return state;
  }
}
