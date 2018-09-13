import React from 'react';
import { shallow, mount } from 'enzyme';
import Banner from './Banner.js';
import mockData from './mockData.js';

describe('Banner', () => {

  let wrapper;

  beforeEach(() => {
    fahrCelsToggle = true;
    wrapper = shallow(<Banner /> );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render completely', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

});