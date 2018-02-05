import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.css';

class ProgressBar extends Component {
    render() {
        if (!this.props.total) {
            return null;
        }
        let width = Math.round(100 * this.props.done / this.props.total);
        return (
            <div className="progress">
                <div className="text">Loaded {this.props.done} of {this.props.total}</div>
                <div className="bar">
                    <div className="done" style={ {width: width + '%'} } />
                </div>
            </div>
        );
    }
}

ProgressBar.propTypes = {
    done: PropTypes.number,
    total: PropTypes.number
};

export default ProgressBar;