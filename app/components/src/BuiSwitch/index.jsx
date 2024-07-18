"use client";

import styles from './BuiSwitch.module.scss';
import PropTypes from "prop-types";

function BuiSwitch({color="blue", ...props}) {
    return (
        <label className={styles.wrapper}>
            <input type="checkbox" {...props}/>
            <div className={styles[color]}>
                <span></span>
            </div>
        </label>
    );
}
BuiSwitch.propTypes = {
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
}
export default BuiSwitch;


