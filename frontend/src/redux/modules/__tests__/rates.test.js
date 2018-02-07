import {fetchSelectedCurrencyRates, fetchCurrencyRates} from "../rates";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


it('fetchSelectedCurrencyRates should dispatch fetchCurrencyRates', () => {
    // set store content
    let state = {
        rates: {
            ticks: null,
            error: null
        },
        filter: {
            selectedCurrency: 'RUB'
        }
    };
    const store = mockStore(state); // mock redux store
    store.dispatch(fetchSelectedCurrencyRates()); // dispatch fetchSelectedCurrencyRates thunk action
    expect(store.getActions()).toEqual([fetchCurrencyRates('RUB')]); // check that fetchCurrencyRates action was dispatched
});