import {TwColor} from "@/app/components/src/types/TwColor";
import React from "react";

export interface IPSwitchPropTypes extends React.InputHTMLAttributes<HTMLInputElement> {
    color?: TwColor
}