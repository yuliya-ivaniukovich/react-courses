import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './DropUp.css';

class DropUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: props.selectedOption,
            open: false
        };
        this.renderOption = this.renderOption.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
        this.close = this.close.bind(this);
    }

    render() {
        let icon = this.state.open ? 'expand_more' : 'expand_less';
        return (
            <div className="drop-up" tabIndex="-1" onBlur={this.close}>
                <div className="selected-option" onClick={this.toggleOpen}>
                    <span>{this.state.selectedOption}</span>
                    <span className="material-icons">{icon}</span>
                </div>
                {this.renderOptions()}
            </div>
        );
    }

    renderOptions() {
        if (!this.state.open) {
            return null;
        }
        return (
            <ul className="options">
                {this.props.options.map(this.renderOption)}
            </ul>
        );
    }

    renderOption(option) {
        return (
            <li className={option === this.state.selectedOption ? 'selected' : ''}
                onClick={() => this.selectOption(option)}>{option}</li>
        );
    }

    toggleOpen() {
        this.setState({ open: !this.state.open });
    }

    close() {
        this.setState({ open: false });
    }

    selectOption(option) {
        this.setState({
            selectedOption: option,
            open: false
        });
        this.props.onSelect(option);
    }
}

DropUp.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedOption: PropTypes.string,
    onSelect: PropTypes.func.isRequired
};

export default DropUp;