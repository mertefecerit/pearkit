"use client"
import styles from './assets/scss/BuiCheckbox.module.scss';
import BuiCheckIcon from "./components/BuiCheckIcon";

function BuiCheckbox({invalid, checked, onChange, label, color='blue'}) {
    return (
        <label
            className={`${styles.BuiCheckboxWrapper} ${invalid ? styles.isInvalid:''}`}
        >
            <input
                type="checkbox"
                onChange={onChange}
                checked={checked}
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

export default BuiCheckbox;


