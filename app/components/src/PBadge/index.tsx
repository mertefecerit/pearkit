"use client"

import styles from './PBadge.module.scss';
import React, {useEffect, useState} from "react";
import {IPBadgePropTypes} from "./type";

const PBadge:React.FC<IPBadgePropTypes> = (
    {
        value= 0,
        size = 'xs',
        color = "red",
        ...props
    }
) => {
    const [modValue, setModValue] = useState('');
    useEffect(() => {
        if (value > 99) {
            setModValue('9+')
        } else {
            setModValue(value.toString())
        }
    }, [value]);
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


