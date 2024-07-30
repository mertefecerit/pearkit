import {TwColor} from "@/app/components/src/types/TwColor";
import React from "react";

export interface IPRadioPropTypes extends React.InputHTMLAttributes<HTMLInputElement> {
    isInvalid?: boolean | true | false,
    label?: string
    color?: TwColor
}