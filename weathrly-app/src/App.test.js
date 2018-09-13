import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App.js';
import mockData from './mockData.js';

describe('App', () => {

  let wrapper;
  let mountedWrapper;

  beforeEach(() => {
    localStorage.setItem('weathrlyHometown', JSON.stringify('Denver, CO'));
    wrapper = shallow(<App />);
    mountedWrapper = mount(<App />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render completely', () => {
    expect(mountedWrapper.find('.main-section').length).toEqual(1);
    expect(mountedWrapper.find('CurrentWeather').length).toEqual(1);
    expect(mountedWrapper.find('.forecast-holder').length).toEqual(1);
  });

  it('should have state and proper default values', () => {
    expect(mountedWrapper.state()).toBeDefined();
    expect(mountedWrapper.state('weatherData')).toEqual(null);
    expect(mountedWrapper.state('zipLocation')).toEqual(null);
    expect(mountedWrapper.state('data')).toEqual(mockData);
    expect(mountedWrapper.state('currentDisplay')).toEqual('');
    expect(mountedWrapper.state('tenSevenToggle')).toEqual(true);
    expect(mountedWrapper.state('fahrCelsToggle')).toEqual(true);
  });

  it('should accept a function called toggleForecastDisplay()', () => {
    const toggleForecastDisplay = jest.fn();

    toggleForecastDisplay();
    expect(toggleForecastDisplay).toHaveBeenCalled();
  });

  it('should be able to toggle forecast display', () => {
    expect(mountedWrapper.state('tenSevenToggle')).toEqual(true);
    mountedWrapper.instance().toggleForecastDisplay();
    expect(mountedWrapper.state('tenSevenToggle')).toEqual(false);
  });

  it('should toggle Fahrenheit and Celsius', () => {
    expect(mountedWrapper.state('fahrCelsToggle')).toEqual(true);
    mountedWrapper.instance().toggleFahrCels();
    expect(mountedWrapper.state('fahrCelsToggle')).toEqual(false); 	
  });

  it('should be able to format location and take in a zip code', () => {
    let testFormat = mountedWrapper.instance().formatInput('Denver, CO');

    expect(testFormat).toEqual('CO/Denver');
    testFormat = mountedWrapper.instance().formatInput('80202');
    expect(testFormat).toEqual('80202'); 	
  });  

  it('should conditionally render hourly or daily cards', () => {
    expect(mountedWrapper.state('tenSevenToggle')).toEqual(true);
    expect(mountedWrapper.find('Daily').length).toEqual(0);    
    expect(mountedWrapper.find('Hourly').length).toEqual(0);  
    mountedWrapper.setState({
      weatherData: mockData,
    });
    expect(mountedWrapper.find('Hourly').length).toEqual(1); 
    expect(mountedWrapper.find('Daily').length).toEqual(0); 
    mountedWrapper.setState({
      tenSevenToggle: false,
    });
    expect(mountedWrapper.find('Hourly').length).toEqual(0); 
    expect(mountedWrapper.find('Daily').length).toEqual(1); 
  }); 

});





