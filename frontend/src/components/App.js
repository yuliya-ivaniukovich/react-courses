import React, {Component} from 'react';
import './App.css';
import CurrencyChart from './chart/CurrencyChart.container';
import CurrencyDropUp from './footer/dropup/CurrencyDropUp.container';

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
                    <CurrencyChart/>
                </article>
                <footer>
                    <CurrencyDropUp/>
                </footer>
            </div>
        );
    }
}

export default App;
