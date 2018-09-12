import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js'
import Daily from './Daily.js';
import mockData from './mockData.js';

describe('Daily', () => {

  let wrapper;
  let mountedWrapper;
  let fahrCelsToggle;

  beforeEach(() => {
    fahrCelsToggle = true;
    wrapper = shallow(<Daily data={mockData} degreeUnit={true} weatherData={mockData} />);
    mountedWrapper = mount(<Daily data={mockData} degreeUnit={fahrCelsToggle} weatherData={mockData} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
    console.log(mountedWrapper);
  });

  it('should render completely', () => {
    expect(mountedWrapper.find('TenDayCard').length).toEqual(10)
  });

  //state on Daily component not set up yet
  it.skip('should accept properties', () => {
  	expect(mountedWrapper.props.degreeunit).toEqual(true);
  });

});