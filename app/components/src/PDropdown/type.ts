import React from "react";
import {TwColor} from "@/types/TwColor";

export type DropdownItemType = {
    [key:string]: string | undefined,
    label?: string,
    value?: string,
}
export interface IPDropdownPropTypes extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    options: DropdownItemType[],
    selector?: string,
    onChange: (item: DropdownItemType) => void,
    selected: DropdownItemType,
    placeholder?: string,
    itemComponent?: React.ReactNode,
    color?: TwColor,
    disabled?: true | false
}