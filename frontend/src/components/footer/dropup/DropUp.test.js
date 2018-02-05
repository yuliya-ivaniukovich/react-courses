import React from 'react';
import DropUp from './DropUp';
import {shallow} from 'enzyme'

describe('DropUp component', () => {
    const props = {
        options: ['USD', 'EUR', 'RUB'],
        onSelect: jest.fn(),
        selectedOption: 'USD'
    };
    let dropUpWrapper;

    beforeEach(() => {
        dropUpWrapper = shallow(<DropUp {...props}/>);
    });

    it('renders without crashing', () => {
        expect(dropUpWrapper).toBePresent();
    });

    it('should change open state on click and render options', () => {
        expect(dropUpWrapper.state().open).toBe(false);
        expect(dropUpWrapper.find('.options').length).toBe(0);

        const selectedOption = dropUpWrapper.find('.selected-option');
        selectedOption.simulate('click');

        expect(dropUpWrapper.state().open).toBe(true);
        expect(dropUpWrapper.find('.options').length).toBe(1);
    });

    it('click on currency option should call onSelect', () => {
        const selectedOption = dropUpWrapper.find('.selected-option');
        selectedOption.simulate('click');

        const options = dropUpWrapper.find('.options');
        const eurOption = options.findWhere(node => node.type() === 'li' && node.text() === 'EUR');
        expect(eurOption).toBePresent();

        eurOption.simulate('click');
        expect(props.onSelect).toBeCalledWith('EUR')
    });
});
