"use client"

import styles from './PBadge.module.scss';
import React from "react";
import {IPBadgePropTypes} from "./type";

const PBadge:React.FC<IPBadgePropTypes> = (
    {
        value= 0,
        size = 'xs',
        color = "red",
        ...props
    }
) => {
    const modValue = value > 99 ? '9+' : value.toString();
    return (
        <div
            className={`${styles.wrapper} ${styles[size]} ${styles[color]}`}
            {...props}
        >
            {modValue}
        </div>
    );
}
export default PBadge;


