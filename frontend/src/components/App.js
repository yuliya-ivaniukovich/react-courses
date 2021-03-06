import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WsStatus from './status/WsStatus.container';
import CurrencyChart from './chart/CurrencyChart.container';
import CurrencyDropUp from './footer/dropup/CurrencyDropUp.container';
import ExportButton from './footer/export/ExportButton.container';

import spinner from './spinner.svg';
import './App.css';
import ProgressBar from './footer/progress/ProgressBar.container';

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
                    <WsStatus />
                    <ProgressBar/>
                </article>
                <footer>
                    <div>
                        <CurrencyDropUp/>
                        <ExportButton/>
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
