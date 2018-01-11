import { connect } from 'react-redux';
import {selectCurrency} from '../../../redux/modules/rates';
import DropUp from './DropUp';

const currencies = ['USD', 'EUR', 'RUB'];

const mapStateToProps = state => {
    return {
        options: currencies,
        selectedOption: state.selectedCurrency,
        disabled: state.fetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelect: (currency) => {
            dispatch(selectCurrency(currency));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropUp);