import React from "react";
import {HTMLMotionProps} from "framer-motion";
type ButtonMotionPropType =
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement> &
    HTMLMotionProps<"button">,'disabled'>;
import {TwColor} from "@/types/TwColor";

export interface IPButtonPropTypes extends ButtonMotionPropType {
    variant?: string | 'basic' | 'outlined' | 'text',
    color?: TwColor,
    size?: string | 'xs' | 'sm' | 'base' | 'lg' | 'xl',
    isLoading?: boolean | true | false,
    label?: string | React.ReactNode,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    animation?: boolean | true | false,
    raised?: boolean | true | false,
    rounded?: boolean | true | false,
    disabled?: boolean | true | false,
}