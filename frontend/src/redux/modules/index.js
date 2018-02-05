import {combineReducers} from 'redux';
import {combineEpics} from 'redux-observable';
import api from './api';
import ws from './ws';
import rates, {ratesEpic} from './rates';
import filter, {filterEpic} from './filter';
import progress from './progress';

export const rootReducer = combineReducers({
    api,
    ws,
    rates,
    filter,
    progress
});

export const rootEpic = combineEpics(
    ratesEpic,
    filterEpic
);