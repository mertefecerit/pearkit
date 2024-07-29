import React from "react";
import {TwColor} from "@/app/components/src/types/TwColor";


export interface IBuiTabsPropTypes extends Omit<React.HTMLAttributes<HTMLDivElement>,'onChange'> {
    color?: TwColor | string
    activeTabIndex?: number
    onChange?: (index:number) => void
}

export interface IBuiTabPropTypes extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode;
    label?: string;
    disabled?: boolean | true | false
}
