import React from 'react';
import { shallow } from 'enzyme';
import { Title } from 'native-base';
import Login from './Login';

describe('<login/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login navigation="" />);
  });

  it('should render without crashing', () => {
    expect(wrapper.find(Title)).toHaveLength(1);
  });
});
