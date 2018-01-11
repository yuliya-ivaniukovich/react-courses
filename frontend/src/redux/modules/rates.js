import {createAction, handleActions} from 'redux-actions';
import {CurrencyRatesApi} from '../../api/CurrencyRatesApi';

//- Actions
export const selectCurrency = createAction('CURRENCY_SELECT', CurrencyRatesApi.fetchCurrencyRates, (currency) => ({currency}));
export const fetchCurrencyRates = createAction('CURRENCY_RATES_FETCH', CurrencyRatesApi.fetchCurrencyRates);
export const fetchSelectedCurrencyRates = () => (dispatch, getState) => dispatch(fetchCurrencyRates(getState().selectedCurrency));

//- State
const initialState = {
    selectedCurrency: 'USD',
    ticks: null,
    fetching: false,
    error: null
};

//- Reducers
export default handleActions({

    CURRENCY_SELECT: (state, action) => {
        if (action.error) {
            return {...state, error: 'Cannot fetch currency rates, try again later'};
        }
        return {...state, selectedCurrency: action.meta.currency, ticks: action.payload};
    },

    CURRENCY_RATES_FETCH: (state, action) => {
        if (action.error) {
            return {...state, error: 'Cannot fetch currency rates, try again later'};
        }
        return {...state, ticks: action.payload};
    }

}, initialState);