import React from 'react';
import { shallow, mount } from 'enzyme';

import Daily from './Daily.js';
import mockData from './mockData.js';

describe('Daily', () => {

  let wrapper;
  let mountedWrapper;
  let fahrCelsToggle;

  beforeEach(() => {
    fahrCelsToggle = true;
    wrapper = shallow(
      <Daily 
        data={mockData} 
        degreeUnit={fahrCelsToggle} 
        weatherData={mockData} 
      />);
    mountedWrapper = mount(
      <Daily 
        data={mockData} 
        degreeUnit={fahrCelsToggle} 
        weatherData={mockData} 
      />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render completely', () => {
    expect(mountedWrapper.find('TenDayCard').length).toEqual(10);
  });

  it('should accept properties', () => {
    expect(mountedWrapper.prop('degreeUnit')).toEqual(true);
  });

});