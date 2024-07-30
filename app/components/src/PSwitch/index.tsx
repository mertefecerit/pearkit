"use client";

import styles from './PSwitch.module.scss';
import React from "react";
import {IPSwitchPropTypes} from "./type";

const PSwitch:React.FC<IPSwitchPropTypes> = (
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
export default PSwitch;


