import React from "react";
import {TwColor} from "@/types/TwColor";


export interface IPTabsPropTypes extends Omit<React.HTMLAttributes<HTMLDivElement>,'onChange'> {
    color?: TwColor | string
    activeTabIndex?: number
    onChange?: (index:number) => void
}

export interface IPTabPropTypes extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode;
    label?: string;
    disabled?: boolean | true | false
}
