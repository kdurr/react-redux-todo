import React from 'react';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { todos, initialState } from '.';

configure({ adapter: new Adapter() });

describe('todo reducer', () => {
  // Step 2
  // TODO - update this
  describe('Toggle todo', () => {
    const todoText = 'Practice Redux';
    it('returns correct state', () => {
      const id = 1;
      const action = {
        type: 'TOGGLE_ITEM',
        payload: { id },
      };

      const expectedState = {
        items: [
          {
            id: 1,
            terms: todoText,
          }
        ],
        terms: todoText
      };

      expect(todos(expectedState, action)).toEqual(expectedState);
    });
  });
});
