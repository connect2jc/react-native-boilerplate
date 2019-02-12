import React from 'react';
import { shallow } from 'enzyme';
import { Header } from 'native-base';
import AppHeader from './AppHeader';

describe('<AppHeader/>', () => {
  let wrapper;
  it('should render without crashing and have a header component', () => {
    wrapper = shallow(<AppHeader headerTitle="" />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });
});
