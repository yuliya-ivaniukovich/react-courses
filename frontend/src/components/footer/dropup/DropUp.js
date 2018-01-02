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

    componentWillReceiveProps(nextProps) {
        this.setState({
            selectedOption: nextProps.selectedOption
        });
    }

    render() {
        let className = 'drop-up' + (this.props.disabled ? ' disabled' : '');
        let icon = this.state.open ? 'expand_more' : 'expand_less';
        return (
            <div className={className} tabIndex="-1" onBlur={this.close}>
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
            <li key={option}
                className={option === this.state.selectedOption ? 'selected' : ''}
                onClick={() => this.selectOption(option)}>{option}</li>
        );
    }

    toggleOpen() {
        if (this.props.disabled) {
            return;
        }
        this.setState({ open: !this.state.open });
    }

    close() {
        this.setState({ open: false });
    }

    selectOption(option) {
        if (this.props.disabled) {
            return;
        }
        this.setState({
            open: false
        });
        this.props.onSelect(option);
    }
}

DropUp.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedOption: PropTypes.string,
    disabled: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default DropUp;