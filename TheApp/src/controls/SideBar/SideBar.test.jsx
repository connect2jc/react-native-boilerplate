import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'native-base';
import SideBar from './SideBar';

describe('<SideBar/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SideBar navigation="" />);
  });

  it('should render without crashing', () => {
    expect(wrapper.find(List)).toHaveLength(1);
  });
});
