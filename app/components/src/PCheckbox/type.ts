import React from "react";
import {TwColor} from "../types/TwColor";

export interface IPCheckboxPropTypes extends React.InputHTMLAttributes<HTMLInputElement> {
    invalid?: true | false,
    color?: TwColor,
    label?: string,
}