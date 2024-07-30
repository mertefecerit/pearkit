"use client"
import styles from './BuiRadio.module.scss';
import {IRadioPropTypes} from "@/app/components/src/BuiRadio/type";
import React from "react";

const BuiRadio:React.FC<IRadioPropTypes> = (
    {
        isInvalid = false,
        label,
        color = 'lime',
        ...props
    }
) => {
    return (
        <label
            className={`${styles.BuiRadioWrapper} ${props.disabled ? styles.isDisabled : ''} ${isInvalid ? styles.isInvalid : ''}`}>
            <input
                type="radio"
                {...props}
            />
            <span className={`${styles[color]}`}></span>
            {label}
        </label>
    );
}
export default BuiRadio;


