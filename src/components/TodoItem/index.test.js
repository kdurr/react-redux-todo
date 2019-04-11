import React from 'react';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoItem from './index';

configure({ adapter: new Adapter() });

describe('TodoItem', () => {
  // Step 5
  xit('calls toggleItem on check of box', () => {
    const props = {
      item: { id: 1 },
      toggleItem: jest.fn(),
    }

    const wrapper = shallow(<TodoItem {...props} />);
    wrapper.find('input').simulate('change');

    expect(props.toggleItem).toHaveBeenCalled();
  });
});
