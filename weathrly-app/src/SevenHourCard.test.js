import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js'
import SevenHourCard from './SevenHourCard.js';
import mockData from './mockData.js';
import Hourly from './Hourly.js';

describe('SevenHourCard', () => {

  let wrapper;
  let mountedWrapper;
  let fahrCelsToggle;
  let hour = mockData.hourly_forecast[0];


  beforeEach(() => {
    fahrCelsToggle = true;
    wrapper = shallow(<SevenHourCard key={hour} hour={hour} degreeUnit={fahrCelsToggle}/> );
    mountedWrapper = mount(<SevenHourCard key={hour} hour={hour} degreeUnit={fahrCelsToggle}/> );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render completely', () => {
    expect(mountedWrapper.find('p').length).toEqual(2);
    expect(mountedWrapper.find('img').length).toEqual(1);
  });

  it('should accept properties', () => {
    expect(mountedWrapper.prop('degreeUnit')).toEqual(true);
  });

});