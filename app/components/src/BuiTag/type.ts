import React from "react";

export interface IBuiTagPropTypes extends React.HTMLAttributes<HTMLSpanElement> {
    label: string | React.ReactNode;
    color?: string
    rounded?: boolean
    icon?: React.ReactNode
}