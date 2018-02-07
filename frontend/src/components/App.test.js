import React from 'react';
import App from './App';
import DropUp from './footer/dropup/DropUp';
import CurrencyChart from './chart/CurrencyChart';
import {shallow} from 'enzyme'

it('renders without crashing and contains all components', () => {
    const appWrapper = shallow(<App fetching={false}/>);
    expect(appWrapper).toBePresent();

    expect(appWrapper.contains(<header><h2>Currency Exchange Rates</h2></header>));
    expect(appWrapper.containsMatchingElement(CurrencyChart));
    expect(appWrapper.containsMatchingElement(DropUp));
});
