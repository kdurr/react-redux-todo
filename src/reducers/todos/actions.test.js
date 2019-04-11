import React from 'react';
import { configure } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { toggleItem } from './actions';

configure({ adapter: new Adapter() });

describe('actions', () => {
  // Step 1
  it('creates an action to toggle a todo', () => {
    const id = 1;

    const expectedAction = {
      type: 'TOGGLE_ITEM',
      payload: id,
    };

    expect(toggleItem(1)).toEqual(expectedAction);
  });
});
