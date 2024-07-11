"use client"
import styles from './assets/scss/BuiCheckbox.module.scss';
import BuiCheckIcon from "./components/BuiCheckIcon";
import PropTypes from "prop-types";

function BuiCheckbox({
                         disabled=false,
                         invalid=false,
                         checked=false,
                         onChange,
                         label = '',
                         color = 'blue',
                         ariaLabel = '',
                     }) {
    return (
        <label
            className={`${styles.BuiCheckboxWrapper} ${invalid ? styles.isInvalid : ''} ${disabled ? styles.isDisabled : ''}`}
        >
            <input
                disabled={disabled}
                type="checkbox"
                onChange={onChange}
                checked={checked}
                aria-checked={checked}
                aria-label={ariaLabel ?? label}
            />
            <span className={`${styles[color]}`}>
                {
                    checked && <BuiCheckIcon/>
                }
            </span>
            {label}
        </label>
    );
}
BuiCheckbox.propTypes = {
    disabled: PropTypes.bool,
    invalid: PropTypes.bool,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    color: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default BuiCheckbox;


