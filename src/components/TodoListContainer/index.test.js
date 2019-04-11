import React from 'react';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mapStateToProps, mapDispatchToProps } from './index';

configure({ adapter: new Adapter() });

describe('TodoListContainer', () => {
  it('returns items through mapStateToProps', () => {
    const initialState = {
      todos: {
        items: []
      },
    }

    expect(mapStateToProps(initialState).items).toEqual([]);
  });

  // Step 3
  xit('returns functions through mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toContain('getTodos');
    expect(Object.keys(mapDispatchToProps)).toContain('toggleItem');
  });
});
