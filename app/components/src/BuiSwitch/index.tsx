"use client";

import styles from './BuiSwitch.module.scss';
import React from "react";
import {IBuiSwitchPropTypes} from "@/app/components/src/BuiSwitch/type";

const BuiSwitch:React.FC<IBuiSwitchPropTypes> = (
    {
        color = "lime",
        ...props
    }
) => {
    return (
        <label className={styles.wrapper}>
            <input type="checkbox" {...props}/>
            <div className={styles[color]}>
                <span></span>
            </div>
        </label>
    );
}
export default BuiSwitch;


