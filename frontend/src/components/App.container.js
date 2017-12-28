import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        error: state.error
    };
};

export default connect(mapStateToProps)(App);