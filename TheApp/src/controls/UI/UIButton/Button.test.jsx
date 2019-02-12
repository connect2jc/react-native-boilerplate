import React from 'react';
import { shallow } from 'enzyme';
import { Button, Text } from 'native-base';
import UIButton from './Button';

describe('<UIButton/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UIButton text="test" />);
  });

  it('should render a component without crashing', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should have a text', () => {
    expect(wrapper.find(Text)).toHaveLength(1);
  });
});
