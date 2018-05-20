import {
  addItem,
  deleteItem,
  toggleItem,
  setFilterBy
} from '../actions';

import {  
  ADD_ITEM,
  DELETE_ITEM,
  TOGGLE_ITEM,
  SET_FILTERBY
} from '../constants';


describe('ItemsPage actions', () => {
  describe('addItem action', () => {
    it('should return correct type and content', () => {
      const content = 'added content';
      const expected = {
        type: ADD_ITEM,
        content
      };
      expect(addItem(content)).toEqual(expected);
    });
  });

  describe('deleteItem action', () => {
    it('should return correct type and content', () => {
      const id = 1;
      const expected = {
        type: DELETE_ITEM,
        id
      };
      expect(deleteItem(id)).toEqual(expected);
    });
  });

  describe('toggleItem action', () => {
    it('should return correct type and content', () => {
      const id = 1;
      const expected = {
        type: TOGGLE_ITEM,
        id
      };
      expect(toggleItem(id)).toEqual(expected);
    });
  });
  
  describe('setFilterBy action', () => {
    it('should return correct type and content', () => {
      const filterBy = 'all';
      const expected = {
        type: SET_FILTERBY,
        filterBy
      };
      expect(setFilterBy(filterBy)).toEqual(expected);
    });
  });  
});
