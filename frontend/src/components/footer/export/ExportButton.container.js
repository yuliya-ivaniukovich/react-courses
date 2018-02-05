import {connect} from 'react-redux';
import {CLIENT_ID} from '../../../redux/modules/ws';

import ExportButton from './ExportButton';

const mapStateToProps = () => ({
    uri: '/api/csv?currency=USD&currency=EUR&currency=RUB&dateFrom=2017-01-01&dateTo=2017-01-07&clientId=' + CLIENT_ID
});

export default connect(mapStateToProps)(ExportButton);