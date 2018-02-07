import {mapStateToProps, mapDispatchToProps} from './CurrencyDropUp.container';
import {CURRENCY_SELECT} from "../../../redux/modules/rates";

describe("Currency drop up container", () => {
    it('mapStateToProps should return props', () => {
        // create state as mock for redux store
        const state = {
            filter: {
                selectedCurrency: 'RUB',
            },
            api: {
                fetching: false,
            }
        };
        // check that mapStateToProps returns expected props
        expect(mapStateToProps(state)).toEqual({
            options: ['USD', 'EUR', 'RUB'],
            selectedOption: 'RUB',
            disabled: false
        })
    });

    it('mapDispatchToProps', () => {
        it('onSelect should be injected', () => {
            const dispatch = jest.fn(); // mock dispatch
            const result = mapDispatchToProps(dispatch); // get mapDispatchToProps result
            expect(result.onSelect).toBeDefined(); // check that onSelect is defined
        });

        it('onSelect should dispatch CURRENCY_SELECT when called', () => {
            const dispatch = jest.fn();
            const result = mapDispatchToProps(dispatch);
            result.onSelect('EUR'); // call onSelect

            expect(dispatch).toHaveBeenCalledWith({ type: CURRENCY_SELECT, payload: 'EUR' }); // check that CURRENCY_SELECT action was dispatched
        });
    });
});