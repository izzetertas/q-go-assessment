import React from 'react';
import { shallow } from 'enzyme';
import ItemsFilter from '../index';


const defaultProps = {
  filterBy: undefined,
  onFilter: f => f
};

describe('<ItemsFilter />', () => {
  it('renders without crashing', () => {
    shallow(<ItemsFilter {...defaultProps} />);
  });

  it('should not render if there is no filterBy', () => {
    const renderedItem = shallow(<ItemsFilter {...defaultProps} />);
    expect(renderedItem.find('#filterBy')).toHaveLength(0);
  });

  it('should not render if filterBy is None', () => {
    const filterBy = 'None';
    const renderedItem = shallow(<ItemsFilter {...defaultProps} filterBy={filterBy} />);
    expect(renderedItem.find('.itemsFilter')).toHaveLength(1);
  });

  it('should not render if filterBy is All', () => {
    const filterBy = 'All';
    const renderedItem = shallow(<ItemsFilter {...defaultProps} filterBy={filterBy} />);
    expect(renderedItem.find('.itemsFilter')).toHaveLength(1);
  });

  it('should not render if filterBy is Done', () => {
    const filterBy = 'Done';
    const renderedItem = shallow(<ItemsFilter {...defaultProps} filterBy={filterBy} />);
    expect(renderedItem.find('.itemsFilter')).toHaveLength(1);
  });

  it('should not render if filterBy is Waiting', () => {
    const filterBy = 'Waiting';
    const renderedItem = shallow(<ItemsFilter {...defaultProps} filterBy={filterBy} />);
    expect(renderedItem.find('.itemsFilter')).toHaveLength(1);
  });
});
