import React, {Component} from 'react';
import './App.css';
import CurrencyChart from './chart/CurrencyChart';

// Hardcode data for now
const ticks = [
    {"Cur_ID": 145, "Date": "2017-01-01T00:00:00", "Cur_OfficialRate": 1.9585},
    {"Cur_ID": 145, "Date": "2017-01-02T00:00:00", "Cur_OfficialRate": 1.9585},
    {"Cur_ID": 145, "Date": "2017-01-03T00:00:00", "Cur_OfficialRate": 1.9585},
    {"Cur_ID": 145, "Date": "2017-01-04T00:00:00", "Cur_OfficialRate": 1.9666},
    {"Cur_ID": 145, "Date": "2017-01-05T00:00:00", "Cur_OfficialRate": 1.9707},
    {"Cur_ID": 145, "Date": "2017-01-06T00:00:00", "Cur_OfficialRate": 1.9653},
    {"Cur_ID": 145, "Date": "2017-01-07T00:00:00", "Cur_OfficialRate": 1.9538}
];

const toChartProps = (ticks) => {
    let dates = [];
    let rates = [];
    ticks.forEach((tick) => {
        dates.push(tick['Date'].split('T')[0]);   // "2017-01-01T00:00:00" => ["2017-01-01", "00:00:00"] => "2017-01-01"
        rates.push(tick['Cur_OfficialRate']);
    });
    return {
        currency: 'USD',
        dates,
        rates
    };
};

class App extends Component {
    render() {
        return (
            <div className="app">
                <header>
                    <h2>Currency Exchange Rates</h2>
                </header>
                <nav>
                    { /* Buttons to switch between chart and table views */ }
                </nav>
                <article>
                    <CurrencyChart {...toChartProps(ticks)}/>
                </article>
                <footer>
                    { /* Here will be components to control info view settings */ }
                </footer>
            </div>
        );
    }
}

export default App;
