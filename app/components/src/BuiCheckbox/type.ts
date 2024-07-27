import React from "react";
import {TwColor} from "@/app/components/src/types/TwColor";

export interface IBuiCheckboxPropTypes extends React.InputHTMLAttributes<HTMLInputElement> {
    invalid?: true | false,
    color?: TwColor,
    label?: string,
}