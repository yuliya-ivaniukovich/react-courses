import {combineReducers} from 'redux';
import {combineEpics} from 'redux-observable';
import api from './api';
import rates, {ratesEpic} from './rates';
import filter, {filterEpic} from './filter';

export const rootReducer = combineReducers({
    api,
    rates,
    filter
});

export const rootEpic = combineEpics(
    ratesEpic,
    filterEpic
);