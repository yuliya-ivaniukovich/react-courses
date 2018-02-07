import React from 'react';
import DropUp from './DropUp';
import {shallow} from 'enzyme'

describe('DropUp component', () => {
    const props = {
        options: ['USD', 'EUR', 'RUB'],
        onSelect: jest.fn(),
        selectedOption: 'USD',
        disabled: false
    };
    let dropUpWrapper;

    beforeEach(() => {
        dropUpWrapper = shallow(<DropUp {...props}/>);
    });

    it('renders without crashing', () => {
        expect(dropUpWrapper).toBePresent();
    });

    it('should change open state on click and render options', () => {
        // check that there is no "options" and open is false
        expect(dropUpWrapper.state().open).toBe(false);
        expect(dropUpWrapper.find('.options').length).toBe(0);

        // simulate "click" on "selected-option"
        const selectedOption = dropUpWrapper.find('.selected-option');
        selectedOption.simulate('click');

        // check that there is "options" and open is true
        expect(dropUpWrapper.state().open).toBe(true);
        expect(dropUpWrapper.find('.options').length).toBe(1);
    });

    it('click on currency option should call onSelect', () => {
        // simulate "click" on "selected-option"
        const selectedOption = dropUpWrapper.find('.selected-option');
        selectedOption.simulate('click');

        // find "li" that represents "EUR" option
        const options = dropUpWrapper.find('.options');
        const eurOption = options.findWhere(node => node.type() === 'li' && node.text() === 'EUR');
        expect(eurOption).toBePresent();

        // simulate "click" on "EUR" option
        eurOption.simulate('click');
        // check that onSelect called with "EUR"
        expect(props.onSelect).toBeCalledWith('EUR')
    });
});
