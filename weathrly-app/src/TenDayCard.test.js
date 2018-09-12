import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js'
import TenDayCard from './TenDayCard.js';
import mockData from './mockData.js';
import Daily from './Daily.js';

describe('TenDayCard', () => {

  let wrapper;
  let mountedWrapper;
  let fahrCelsToggle;
  let day = mockData.forecast.simpleforecast.forecastday[0];


  beforeEach(() => {
    fahrCelsToggle = true;
    wrapper = shallow(<TenDayCard key={day} day={day} degreeUnit={fahrCelsToggle}/> );
    mountedWrapper = mount(<TenDayCard key={day} day={day} degreeUnit={fahrCelsToggle}/> );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render completely', () => {
    expect(mountedWrapper.find('p').length).toEqual(3);
    expect(mountedWrapper.find('img').length).toEqual(1);
  });

  it('should accept properties', () => {
    expect(mountedWrapper.prop('degreeUnit')).toEqual(true);
  });

});