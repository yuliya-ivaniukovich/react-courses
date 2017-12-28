//- Actions
export const CURRENCY_SELECT = 'CURRENCY_SELECT';

//- State
const ticksStore = {
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

const initialState = {
    selectedCurrency: 'USD',
    ticks: ticksStore['USD']
};

//- Reducers
export default (state = initialState, action) => {
    switch (action.type) {
        case CURRENCY_SELECT:
            let currency = action.payload;
            return {
                selectedCurrency: currency,
                ticks: ticksStore[currency]
            };
        default:
            return state;
    }
};