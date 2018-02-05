import reducer from './rates';

it('CURRENCY_SELECT should change selectedCurrency', () => {
    // set initial state
    const initialState = {
        selectedCurrency: 'USD',
        ticks: null,
        fetching: false,
        error: null
    };
    // set expected state
    const expectedState = {
        selectedCurrency: 'EUR',
        ticks: null,
        fetching: false,
        error: null
    };
    // check that reducer returns expected state on CURRENCY_SELECT action
    expect(reducer(initialState, {type: 'CURRENCY_SELECT', payload: 'EUR'})).toEqual(expectedState)
});