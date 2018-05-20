import React from 'react';
import { shallow } from 'enzyme';
import FilterLink from '../FilterLink';


const defaultProps = {
  filterBy: undefined,
  title: '',
  onClick: f => f
};

describe('<FilterLink />', () => {
  it('renders without crashing', () => {
    shallow(<FilterLink {...defaultProps} />);
  });

  it('should render <b>title</b> if filterBy === title', () => {
    const filterBy = 'All', title = filterBy;
    const renderedItem = shallow(<FilterLink {...defaultProps} filterBy={filterBy} title={title} />);
    expect(renderedItem.find('.filterLink-span')).toHaveLength(1);
    expect(renderedItem.find('.filterLink-span').node.props.children).toEqual(filterBy);
  });

  it('should render <a>title</a> if filterBy !== title', () => {
    const filterBy = 'All', title = 'Done';
    const renderedItem = shallow(<FilterLink {...defaultProps} filterBy={filterBy} title={title} />);
    expect(renderedItem.find('.filterLink-anchor')).toHaveLength(1);
    expect(renderedItem.find('.filterLink-anchor').node.props.children).toEqual(title);
  });

  it('should call onClick with the title', () => {
    const filterBy = 'All',
      title = 'Done',
      onClickMock = jest.fn();
    const renderedItem = shallow(<FilterLink filterBy={filterBy} title={title} onClick={onClickMock} />);
    renderedItem.find('.filterLink-anchor').simulate('click', {
      preventDefault: () => {}
    });
    expect(onClickMock.mock.calls.length).toBe(1);
  });
});
