"use client"

import styles from './PButtonGroup.module.scss';
import React, {ReactElement} from "react";
import {IPButtonGroupPropType} from "./type";

const PButtonGroup:React.FC<IPButtonGroupPropType> = (
    {
        orientation = "horizontal",
        ...props
    }
) => {
    return (
        <div
            className={`${styles.wrapper} ${styles[orientation]}`}
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

export default PButtonGroup;


