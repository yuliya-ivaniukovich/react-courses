import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

global.fetch = require('jest-fetch-mock'); // used to mock fetch for redux api actions tests
Enzyme.configure({ adapter: new Adapter() });