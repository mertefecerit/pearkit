"use client";

import React from "react";
import {IBuiTabPropTypes} from "./type";

const BuiTab:React.FC<IBuiTabPropTypes> = (
    {
        disabled = false,
        icon,
        label,
        ...props
    }
    ) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default BuiTab;