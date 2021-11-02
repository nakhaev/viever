import PropTypes from 'prop-types';

const GuardWrapper = props => {
    console.log(props.guards);
    const calculateGuards = () => {
        let result = true;
        if(!props.guards || props.guards.length === 0) return true;
        props.guards.map(guard => {
            result = guard && result;
            return guard;
        })
        return result;
    }
    return(
        calculateGuards() ? props.children : null
    )
}

GuardWrapper.propTypes = {
    guards: PropTypes.array
}

export default GuardWrapper;
