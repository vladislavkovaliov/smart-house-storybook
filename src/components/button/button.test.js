import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './button'

describe('<Button />', () => {
  test('shallow', () => {
    const wrapper = shallow(<Button text="some text" />);

    expect(wrapper).toMatchSnapshot();
  });
});
