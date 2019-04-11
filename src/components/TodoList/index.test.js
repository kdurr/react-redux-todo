import React from 'react';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from './index';
import TodoItem from '../TodoItem';

configure({ adapter: new Adapter() });

describe('TodoList', () => {
  // Step 4
  it('has the correct props', () => {
    const props = {
      todoItems: [{ id: 1 }],
      toggleItem: jest.fn(),
    }

    const wrapper = shallow(<TodoList {...props} />);

    expect(wrapper.find(TodoItem)).toHaveProp('toggleItem');
  });
});
