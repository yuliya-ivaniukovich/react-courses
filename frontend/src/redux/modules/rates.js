//- Actions
export const CURRENCY_SELECT = 'CURRENCY_SELECT';
export const CURRENCY_RATES_FETCH = 'CURRENCY_RATES_FETCH';
export const CURRENCY_RATES_FETCH_COMPLETE = 'CURRENCY_RATES_FETCH_COMPLETE';
export const CURRENCY_RATES_FETCH_ERROR = 'CURRENCY_RATES_FETCH_ERROR';

//- State
const initialState = {
    selectedCurrency: 'USD',
    ticks: null,
    fetching: false,
    error: null
};

//- Reducers
export default (state = initialState, action) => {
    switch (action.type) {
        case CURRENCY_SELECT:
            return {...state, selectedCurrency: action.payload, ticks: null};

        case CURRENCY_RATES_FETCH:
            return {...state, fetching: true};

        case CURRENCY_RATES_FETCH_COMPLETE:
            return {...state, fetching: false, ticks: action.payload};

        case CURRENCY_RATES_FETCH_ERROR:
            return {...state, fetching: false, error: action.payload};

        default:
            return state;
    }
};