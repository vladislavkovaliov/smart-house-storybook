import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, mount } from 'enzyme';

global.shallow = shallow;
global.mount = mount;
global.React = React;

Enzyme.configure({ adapter: new Adapter() });
