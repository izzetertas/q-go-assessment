import {  
  ADD_ITEM,
  DELETE_ITEM,
  TOGGLE_ITEM,
  SET_FILTERBY
} from './constants';

export function addItem(content) {
  return { 
    type: ADD_ITEM, 
    content 
  };
};

export function deleteItem(id){
  return { 
    type: DELETE_ITEM,
    id 
  };
};

export function toggleItem(id) {
  return { 
    type: TOGGLE_ITEM, 
    id 
  };
};

export function setFilterBy(filterBy){ 
  return { 
    type: SET_FILTERBY, 
    filterBy 
  };
};
