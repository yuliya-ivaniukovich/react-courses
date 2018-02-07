import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = state => {
    return {
        fetching: state.api.fetching,
        error: state.rates.error
    };
};

export default connect(mapStateToProps)(App);