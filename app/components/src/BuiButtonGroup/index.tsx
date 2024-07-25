"use client"

import styles from './BuiButtonGroup.module.scss';
import React, {ReactElement} from "react";
import {IBuiButtonGroupPropType} from "@/app/components/src/BuiButtonGroup/type";

const BuiButtonGroup:React.FC<IBuiButtonGroupPropType> = (
    {
        orientation = "horizontal",
        ...props
    }
) => {
    return (
        <div
            className={`${styles.BuiButtonGroupWrapper} ${styles[orientation]}`}
            {...props}>
            {
                React.Children.map(props.children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child as ReactElement, {animation: false})
                    }
                    return child;
                })
            }
        </div>
    );
}

export default BuiButtonGroup;


