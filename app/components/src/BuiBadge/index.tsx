"use client"
import styles from './BuiBadge.module.scss';
import React, {useEffect, useState} from "react";
import {IBuiBadgeProps} from "@/app/components/src/BuiBadge/type";

const BuiBadge:React.FC<IBuiBadgeProps> = (
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
            className={`${styles.BuiBadgeWrapper} ${styles[size]} ${styles[color]}`}
            {...props}
        >
            {modValue}
        </div>
    );
}
export default BuiBadge;


