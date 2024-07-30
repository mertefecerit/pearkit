"use client"
import styles from './PRadio.module.scss';
import {IPRadioPropTypes} from "./type";
import React from "react";

const PRadio:React.FC<IPRadioPropTypes> = (
    {
        isInvalid = false,
        label,
        color = 'lime',
        ...props
    }
) => {
    return (
        <label
            className={`${styles.wrapper} ${props.disabled ? styles.isDisabled : ''} ${isInvalid ? styles.isInvalid : ''}`}>
            <input
                type="radio"
                {...props}
            />
            <span className={`${styles[color]}`}></span>
            {label}
        </label>
    );
}
export default PRadio;


