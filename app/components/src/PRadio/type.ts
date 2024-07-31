import {TwColor} from "../types/TwColor";
import React from "react";

export interface IPRadioPropTypes extends React.InputHTMLAttributes<HTMLInputElement> {
    isInvalid?: boolean | true | false,
    label?: string
    color?: TwColor
}