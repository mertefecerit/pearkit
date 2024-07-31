import {TwColor} from "../types/TwColor";
import React from "react";

export interface IPSwitchPropTypes extends React.InputHTMLAttributes<HTMLInputElement> {
    color?: TwColor
}