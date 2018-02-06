import {connect} from 'react-redux';
import {CLIENT_ID} from '../../../redux/modules/ws';

import ExportButton from './ExportButton';
import {API_HOST} from '../../../api/CurrencyRatesApi';

const mapStateToProps = () => ({
    uri: `http://${API_HOST}/api/csv?currency=USD&currency=EUR&currency=RUB&dateFrom=2017-01-01&dateTo=2017-01-07&clientId=${CLIENT_ID}`
});

export default connect(mapStateToProps)(ExportButton);