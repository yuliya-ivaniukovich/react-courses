import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Line} from 'react-chartjs-2';
import './CurrencyChart.css';

class CurrencyChart extends Component {
    render() {
        let data = {
            labels: this.props.dates,
            datasets: [{
                label: this.props.currency,
                data: this.props.rates,
                lineTension: 0,
                borderColor: '#751430',
                backgroundColor: 'rgba(240, 240, 240, 0.3)',
                pointBackgroundColor: 'white'
            }]
        };
        return (
            <div className='currency-chart'>
                <Line data={data}/>
            </div>
        );
    }
}

CurrencyChart.propTypes = {
    currency: PropTypes.string.isRequired,
    dates: PropTypes.arrayOf(PropTypes.string).isRequired,
    rates: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default CurrencyChart;