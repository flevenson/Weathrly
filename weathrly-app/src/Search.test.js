import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js'
import Search from './Search.js';
import mockData from './mockData.js';

describe('Search', () => {

  let wrapper;
  let mountedWrapper;
  let fahrCelsToggle;
  let sendLocationFunction = 'function passed down'

  beforeEach(() => {
    fahrCelsToggle = true;
    wrapper = shallow(<Search sendLocation={sendLocationFunction} />);
    mountedWrapper = mount(<Search sendLocation={sendLocationFunction} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render completely', () => {
    expect(mountedWrapper.find('form').length).toEqual(1)
    expect(mountedWrapper.find('input').length).toEqual(1)
    expect(mountedWrapper.find('button').length).toEqual(1)
  });

  it('should accepts properties', () => {
    console.log(mountedWrapper.prop('sendLocation'))
    expect(mountedWrapper.prop('sendLocation')).toEqual('function passed down');
  });

  it('should manipulate the state of the user input', () => {
    expect(mountedWrapper.state('userInput')).toEqual('');

    mountedWrapper.setState({
      userInput: 'New York, NY'
    });
    expect(mountedWrapper.state('userInput')).toEqual('New York, NY');
  });

  it.skip('should have a method that sends the user input to the App component', () => {

  });

});