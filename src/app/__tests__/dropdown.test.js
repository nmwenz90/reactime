/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dropdown from '../components/Dropdown';

configure({ adapter: new Adapter() });

describe('unit testing for Dropdown.jsx', () => {
  let wrapper;
  const props = {
    speeds: [
      { value: 1234, label: '0.5x' },
      { value: 312, label: '1.0x' },
      { value: 23, label: '2.0x' },
    ],
    setSpeed: jest.fn(),
    selectedSpeed: { value: 312, label: '1.0x' },
  };
  beforeEach(() => {
    wrapper = shallow(<Dropdown {...props} />);
    console.log('setSpeed: ', props.setSpeed);
  });

  describe('Component', () => {
    test('array of objects that have value and label should be options props', () => {
      expect(wrapper.props().options).toEqual(props.speeds);
    });
    test('selectedSpeed should be value property', () => {
      expect(wrapper.props().value).toEqual(props.selectedSpeed);
      expect(wrapper.props().value).toHaveProperty('value');
      expect(wrapper.props().value).toHaveProperty('label');
    });
    test('SelectedSpeed value should be a number, label a string', () => {
      expect(typeof wrapper.props().value.value).toBe('number');
      expect(typeof wrapper.props().value.label).toBe('string');
    })
  });

  describe('setSpeed', () => {
    test('should invoke setSpeed on change', () => {
      wrapper.simulate('change', { value: 2000, label: '0.5x' });
      expect(props.setSpeed).toHaveBeenCalled();
    });
  });
});
