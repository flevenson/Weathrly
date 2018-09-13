import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js'
import CurrentWeather from './CurrentWeather.js';
import mockData from './mockData.js';

describe('CurrentWeather', () => {

  let wrapper;
  let mountedWrapper;
  let fahrCelsToggle;
  let currentTempUnit;

  beforeEach(() => {
    fahrCelsToggle = true;
    wrapper = shallow(<CurrentWeather data={mockData} degreeUnit={fahrCelsToggle} weatherData={mockData} />);
    mountedWrapper = mount(<CurrentWeather data={mockData} degreeUnit={fahrCelsToggle} weatherData={mockData} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render completely', () => {
    expect(mountedWrapper.find('.icon-conditions-div').length).toEqual(1);
    expect(mountedWrapper.find('.grid-div').length).toEqual(5);
  });

  it('should accept properties', () => {
    expect(mountedWrapper.prop('degreeUnit')).toEqual(true);
  });

  it('should render temperature conditionally', () => {
    expect(mountedWrapper.prop('degreeUnit')).toEqual(true);
    const tempWrapper = mountedWrapper.find('h1');
    expect(tempWrapper.text()).toEqual('46°F');
    fahrCelsToggle = false;
    mountedWrapper.setProps({degreeUnit: false})
    expect(mountedWrapper.prop('degreeUnit')).toEqual(false);
    expect(tempWrapper.text()).toEqual('7.8°C');
  });

});