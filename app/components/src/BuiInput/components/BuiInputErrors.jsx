import PropTypes from "prop-types";

function BuiInputErrors({errors}) {
    return (
        errors && errors.length > 0 &&
        <ul>
            {errors.map((error, index) => <li key={index}>{error}</li>)}
        </ul>
    )
}

BuiInputErrors.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string),
}
export default BuiInputErrors;