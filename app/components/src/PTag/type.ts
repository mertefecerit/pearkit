import React from "react";
import {TwColor} from "@/app/components/src/types/TwColor";

export interface IPTagPropTypes extends React.HTMLAttributes<HTMLSpanElement> {
    label: string | React.ReactNode;
    color?: TwColor
    rounded?: boolean
    icon?: React.ReactNode
}