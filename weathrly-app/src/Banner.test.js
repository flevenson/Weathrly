import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js';
import Banner from './Banner.js';
import mockData from './mockData.js';

describe('Banner', () => {

  let wrapper;
  let mountedWrapper;
  let fahrCelsToggle;
  let day = mockData.forecast.simpleforecast.forecastday[0];

  beforeEach(() => {
    fahrCelsToggle = true;
    wrapper = shallow(<Banner /> );
    mountedWrapper = mount(<Banner /> );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render completely', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

});