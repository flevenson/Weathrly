import React from 'react';
import { shallow, mount } from 'enzyme';

import Daily from './Daily.js';
import mockData from './mockData.js';

describe('Daily', () => {

  let wrapper;
  let mountedWrapper;

  beforeEach(() => {
    wrapper = shallow(<Daily data={mockData} degreeUnit={true} weatherData={mockData} />);
    mountedWrapper = mount(<Daily data={mockData} degreeUnit={true} weatherData={mockData} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  //state on Daily component not set up yet
  it.skip('should accept properties', () => {
  	expect(mountedWrapper.state().day).toEqual("");
  });

  it('should render a ten-day card', () => {
  	expect(wrapper.find("TenDayCard").length).toEqual(10);
  });

});