import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js';
import Hourly from './Hourly.js';
import mockData from './mockData.js';

describe('Hourly', () => {

  let wrapper;
  let mountedWrapper;
  let fahrCelsToggle;

  beforeEach(() => {
    fahrCelsToggle = true;
    wrapper = shallow(<Hourly data={mockData} degreeUnit={fahrCelsToggle} weatherData={mockData} />);
    mountedWrapper = mount(<Hourly data={mockData} degreeUnit={fahrCelsToggle} weatherData={mockData} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render completely', () => {
    expect(mountedWrapper.find('SevenHourCard').length).toEqual(7);
  });

  it('should accept properties', () => {
    expect(mountedWrapper.prop('degreeUnit')).toEqual(true);
  });

});