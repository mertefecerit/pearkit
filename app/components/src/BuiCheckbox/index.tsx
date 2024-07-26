"use client"
import styles from './BuiCheckbox.module.scss';
import CheckIcon from "../components/icons/CheckIcon"
import React from "react";
import {IBuiCheckboxPropTypes} from "@/app/components/src/BuiCheckbox/type";

const BuiCheckbox: React.FC<IBuiCheckboxPropTypes> = (
    {
        invalid = false,
        label,
        color = 'blue',
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
export default BuiCheckbox;


