"use client"
import styles from './PCheckbox.module.scss';
import CheckIcon from "../components/icons/CheckIcon"
import React from "react";
import {IPCheckboxPropTypes} from "./type";

const PCheckbox: React.FC<IPCheckboxPropTypes> = (
    {
        invalid = false,
        label,
        color = 'lime',
        ...props
    }
) => {
    return (
        <label className={`${styles.wrapper} ${invalid ? styles.isInvalid : ''}`}>
            <input
                type="checkbox"
                {...props}
            />
            <div className={`${styles[color]}`}>
                {
                    props.checked && <CheckIcon size="1em"/>
                }
            </div>
            <span>{label}</span>
        </label>
    );
}
export default PCheckbox;


