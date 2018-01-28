import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CurrencyChart from './chart/CurrencyChart.container';
import CurrencyDropUp from './footer/dropup/CurrencyDropUp.container';

import spinner from './spinner.svg';
import './App.css';

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
                    {this.renderSpinner()}
                </article>
                <footer>
                    <div>
                        <CurrencyDropUp/>
                        <a href={"/api/csv?currency=USD&currency=EUR&currency=RUB&dateFrom=2017-01-01&dateTo=2017-01-07"}>
                            <span className="material-icons">file_download</span>Export
                        </a>
                    </div>
                </footer>
            </div>
        );
    }

    renderSpinner() {
        if (!this.props.fetching) {
            return null;
        }
        return (
            <div className="loading">
                <img src={spinner} alt="Loading"/>
            </div>
        );
    }

    renderArticle() {
        if (this.props.error) {
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
