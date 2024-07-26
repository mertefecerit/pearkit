import {TwColor} from "@/app/components/src/types/TwColor";
import React from "react";

export interface IRadioPropTypes extends React.InputHTMLAttributes<HTMLInputElement> {
    isInvalid?: boolean | true | false,
    label?: string
    color?: TwColor
}