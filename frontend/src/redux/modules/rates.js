import {handleActions, combineActions} from 'redux-actions';
import {createApiAction} from '../middleware/api';
import {CurrencyRatesApi} from '../../api/CurrencyRatesApi';
import {selectCurrency} from './filter';

//- Actions
export const fetchCurrencyRates = createApiAction('CURRENCY_RATES_FETCH', CurrencyRatesApi.fetchCurrencyRates);
export const fetchSelectedCurrencyRates = () => (dispatch, getState) => dispatch(fetchCurrencyRates(getState().filter.selectedCurrency));

//- State
const initialState = {
    ticks: null,
    error: null
};

//- Reducers
export default handleActions({

    [combineActions(selectCurrency, fetchCurrencyRates)]: (state, action) => {
        if (action.error) {
            return {...state, error: 'Cannot fetch currency rates, try again later'};
        }
        return {...state, ticks: action.payload};
    }

}, initialState);