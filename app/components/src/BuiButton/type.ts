import React from "react";
import {HTMLMotionProps} from "framer-motion";
type ButtonMotionPropType = React.ButtonHTMLAttributes<HTMLButtonElement> & HTMLMotionProps<"button">;
import {TwColor} from "../types/TwColor";

export interface IBuiButtonPropTypes extends ButtonMotionPropType {
    variant?: 'basic' | 'outlined' | 'text',
    color?: TwColor,
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl',
    isLoading?: true | false,
    label?: string,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    animation?: true | false,
    raised?: true | false,
    rounded?: true | false,
}