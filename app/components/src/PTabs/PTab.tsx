"use client";

import React from "react";
import {IPTabPropTypes} from "./type";

const PTab:React.FC<IPTabPropTypes> = (
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

export default PTab;