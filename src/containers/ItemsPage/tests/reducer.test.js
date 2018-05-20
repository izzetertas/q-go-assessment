import reducer, { initialState } from '../reducer';
import { addItem, deleteItem, toggleItem, setFilterBy } from '../actions';

describe('reducer', () => {
  let state = {};
  beforeEach(() => {
    state = {
      items: [
        { id: 1, content: 'first' },
        { id: 2, content: 'second' },
      ]
    }
  });
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should add new items on ADD_ITEM', () => {
    const mockAction = addItem('third');
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(3);
    expect(result.items[2].id).toEqual(3);
    expect(result.items[2].content).toEqual('third');
  });

  it('should delete an item correctly on DELETE_ITEM', () => {
    const mockAction = deleteItem(1);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(1);
    expect(result.items[0].id).toBe(state.items[1].id);
    expect(result.items[0].content).toBe(state.items[1].content)
  });
  
  it('should handle the toggleItem action correctly', () => {
    const mockAction = toggleItem(2);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(2);
    expect(result.items[1].isDone).toBe(true);
  });
  
  it('should handle the setFilterBy action correctly', () => {
    const mockAction = setFilterBy('all');
    const result = reducer(state, mockAction);
    expect(result.filterBy).toEqual('all');
  });
});
