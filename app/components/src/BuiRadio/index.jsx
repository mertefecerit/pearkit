"use client"
import styles from './BuiRadio.module.scss';
import PropTypes from "prop-types";

function BuiRadio({
                      disabled = false,
                      isInvalid = false,
                      checked = false,
                      onChange,
                      label,
                      color = 'blue',
                      ...props
                  }) {
    return (
        <label
            className={`${styles.BuiRadioWrapper} ${disabled ? styles.isDisabled : ''} ${isInvalid ? styles.isInvalid : ''}`}>
            <input
                disabled={disabled}
                type="radio"
                onChange={onChange}
                checked={checked}
                {...props}
            />
            <span className={`${styles[color]}`}></span>
            {label}
        </label>
    );
}

BuiRadio.propTypes = {
    disabled: PropTypes.bool,
    isInvalid: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    color: PropTypes.string,
}
export default BuiRadio;


