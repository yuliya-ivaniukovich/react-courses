import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './CurrencyChart.css';

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

const toChartData = (ticks) => {
    let data = {
        labels: [],
        datasets: [{
            label: 'USD',
            data: [],
            lineTension: 0,
            borderColor: '#751430',
            backgroundColor: 'rgba(240, 240, 240, 0.3)',
            pointBackgroundColor: 'white'
        }]
    };
    ticks.forEach((tick) => {
        data.labels.push(tick['Date'].split('T')[0]);   // "2017-01-01T00:00:00" => ["2017-01-01", "00:00:00"] => "2017-01-01"
        data.datasets[0].data.push(tick['Cur_OfficialRate']);
    });
    return data;
};

class CurrencyChart extends Component {
    render() {
        return (
            <div className='currency-chart'>
                <Line data={toChartData(ticks)}/>
            </div>
        );
    }
}

export default CurrencyChart;