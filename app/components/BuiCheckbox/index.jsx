"use client"
import styles from './assets/scss/BuiCheckbox.module.scss';
import BuiCheckIcon from "./components/BuiCheckIcon";

function BuiCheckbox({checked, onChange, label, color='blue'}) {
    return (
        <label
            className={`${styles.BuiCheckboxWrapper}`}
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


