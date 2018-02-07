import reducer, {selectCurrency} from '../filter';

// set initial state
const initialState = {
    selectedCurrency: 'USD'
};

// test action creator
it('selectCurrency creates CURRENCY_SELECT action', () => {
    // call action creator and check that it return proper action
    const selectCurrencyAction = selectCurrency("EUR");
    expect(selectCurrencyAction.meta).toEqual({"currency": "EUR", "isApiCall": true});
    expect(selectCurrencyAction.type).toEqual("CURRENCY_SELECT");
});

// test reducer
it('CURRENCY_SELECT should change selectedCurrency', () => {
    // set expected state
    const expectedState = {
        selectedCurrency: 'EUR'
    };
    // check that reducer returns expected state on CURRENCY_SELECT action
    expect(reducer(initialState, {type: 'CURRENCY_SELECT', meta: {currency: 'EUR'}})).toEqual(expectedState);
});