import {combineReducers} from 'redux';
import api from './api';
import rates from './rates';
import filter from './filter';

export default combineReducers({
    api,
    rates,
    filter
});