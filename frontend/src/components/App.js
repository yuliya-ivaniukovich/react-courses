import React, {Component} from 'react';
import './App.css';
import CurrencyChart from './chart/CurrencyChart';
import DropUp from './footer/dropup/DropUp';

// Hardcode data for now
const currencies = ['USD', 'EUR', 'RUB'];
const defaultCurrency = 'USD';

const ticks = {
    'USD': [
        {"Cur_ID": 145, "Date": "2017-01-01T00:00:00", "Cur_OfficialRate": 1.9585},
        {"Cur_ID": 145, "Date": "2017-01-02T00:00:00", "Cur_OfficialRate": 1.9585},
        {"Cur_ID": 145, "Date": "2017-01-03T00:00:00", "Cur_OfficialRate": 1.9585},
        {"Cur_ID": 145, "Date": "2017-01-04T00:00:00", "Cur_OfficialRate": 1.9666},
        {"Cur_ID": 145, "Date": "2017-01-05T00:00:00", "Cur_OfficialRate": 1.9707},
        {"Cur_ID": 145, "Date": "2017-01-06T00:00:00", "Cur_OfficialRate": 1.9653},
        {"Cur_ID": 145, "Date": "2017-01-07T00:00:00", "Cur_OfficialRate": 1.9538}
    ],
    'EUR': [
        {"Cur_ID": 292, "Date": "2017-01-01T00:00:00", "Cur_OfficialRate": 2.0450},
        {"Cur_ID": 292, "Date": "2017-01-02T00:00:00", "Cur_OfficialRate": 2.0450},
        {"Cur_ID": 292, "Date": "2017-01-03T00:00:00", "Cur_OfficialRate": 2.0450},
        {"Cur_ID": 292, "Date": "2017-01-04T00:00:00", "Cur_OfficialRate": 2.0545},
        {"Cur_ID": 292, "Date": "2017-01-05T00:00:00", "Cur_OfficialRate": 2.0534},
        {"Cur_ID": 292, "Date": "2017-01-06T00:00:00", "Cur_OfficialRate": 2.0716},
        {"Cur_ID": 292, "Date": "2017-01-07T00:00:00", "Cur_OfficialRate": 2.0676}
    ],
    'RUB': [
        {"Cur_ID": 298, "Date": "2017-01-01T00:00:00", "Cur_OfficialRate": 3.2440},
        {"Cur_ID": 298, "Date": "2017-01-02T00:00:00", "Cur_OfficialRate": 3.2440},
        {"Cur_ID": 298, "Date": "2017-01-03T00:00:00", "Cur_OfficialRate": 3.2440},
        {"Cur_ID": 298, "Date": "2017-01-04T00:00:00", "Cur_OfficialRate": 3.2142},
        {"Cur_ID": 298, "Date": "2017-01-05T00:00:00", "Cur_OfficialRate": 3.2297},
        {"Cur_ID": 298, "Date": "2017-01-06T00:00:00", "Cur_OfficialRate": 3.2633},
        {"Cur_ID": 298, "Date": "2017-01-07T00:00:00", "Cur_OfficialRate": 3.2769}
    ]
};

const toChartProps = (currency, ticks) => {
    let dates = [];
    let rates = [];
    ticks[currency].forEach((tick) => {
        dates.push(tick['Date'].split('T')[0]);   // "2017-01-01T00:00:00" => ["2017-01-01", "00:00:00"] => "2017-01-01"
        rates.push(tick['Cur_OfficialRate']);
    });
    return {
        currency,
        dates,
        rates
    };
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCurrency: defaultCurrency
        };
        this.onSelectCurrency = this.onSelectCurrency.bind(this);
    }

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
                    <CurrencyChart {...toChartProps(this.state.selectedCurrency, ticks)}/>
                </article>
                <footer>
                    <DropUp options={currencies} onSelect={this.onSelectCurrency} selectedOption={defaultCurrency}/>
                </footer>
            </div>
        );
    }

    onSelectCurrency(currency) {
        this.setState({
            selectedCurrency: currency
        });
    }
}

export default App;
