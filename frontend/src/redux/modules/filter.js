import {handleActions, createAction} from 'redux-actions';
import {fetchCurrencyRates} from './rates';

//- Actions
export const selectCurrency = createAction('CURRENCY_SELECT');

//- State
const initialState = {
    selectedCurrency: 'USD'
};

//- Epics
export const filterEpic = action$ => {
    return action$.ofType('CURRENCY_SELECT')
        .map(action => {
            return fetchCurrencyRates(action.payload);
        });
};

//- Reducers
export default handleActions({
    CURRENCY_SELECT: (state, action) => {
        return {...state, selectedCurrency: action.payload};
    }

}, initialState);