import {createApiAction} from '../middleware/api';
import {CurrencyRatesApi} from '../../api/CurrencyRatesApi';
import {handleActions} from 'redux-actions';

//- Actions
export const selectCurrency = createApiAction('CURRENCY_SELECT', CurrencyRatesApi.fetchCurrencyRates, (currency) => ({currency}));

//- State
const initialState = {
    selectedCurrency: 'USD'
};

//- Reducers
export default handleActions({

    CURRENCY_SELECT: (state, action) => {
        if (action.error) {
            return state;
        }
        return {...state, selectedCurrency: action.meta.currency};
    }

}, initialState);