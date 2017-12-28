import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
                    {this.renderArticle()}
                </article>
                <footer>
                    <CurrencyDropUp/>
                </footer>
            </div>
        );
    }

    renderArticle() {
        if (this.props.fetching) {
            return <div className="loading">Loading...</div>;
        } else if (this.props.error) {
            console.log(this.props.error);
            return <div className="error">{this.props.error}</div>;
        } else {
            return <CurrencyChart/>;
        }
    }
}

App.propTypes = {
    fetching: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default App;
