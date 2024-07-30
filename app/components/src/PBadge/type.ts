import React from "react";
import {TwColor} from "@/app/components/src/types/TwColor";

export interface IPBadgePropTypes extends React.HTMLAttributes<HTMLDivElement> {
    value?: number,
    size?: 'xs' | 'sm' | 'base',
    color?: TwColor
}