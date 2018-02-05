import {connect} from 'react-redux';
import ProgressBar from './ProgressBar';

const mapStateToProps = (state) => state.progress;

export default connect(mapStateToProps)(ProgressBar);