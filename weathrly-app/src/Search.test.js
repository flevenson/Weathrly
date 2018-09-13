import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from './Search.js';

describe('Search', () => {

  let wrapper;
  let mountedWrapper;
  let sendLocationFunction = 'function passed down';

  beforeEach(() => {
    wrapper = shallow(<Search sendLocation={sendLocationFunction} />);
    mountedWrapper = mount(<Search sendLocation={sendLocationFunction} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render completely', () => {
    expect(mountedWrapper.find('form').length).toEqual(1);
    expect(mountedWrapper.find('input').length).toEqual(1);
    expect(mountedWrapper.find('button').length).toEqual(1);
  });

  it('should accepts properties', () => {
    expect(mountedWrapper.prop('sendLocation')).toEqual('function passed down');
  });

  it('should manipulate the state of the user input', () => {
    expect(mountedWrapper.state('userInput')).toEqual('');

    mountedWrapper.setState({
      userInput: 'New York, NY'
    });
    expect(mountedWrapper.state('userInput')).toEqual('New York, NY');
  });


});