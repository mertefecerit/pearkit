import React from "react";
import {TwColor} from "@/types/TwColor";

export interface IPInputPropTypes extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'size'> {
    icon?: React.ReactNode;
    isLoading?: boolean | true | false,
    color?: TwColor,
    size?: string | 'sm' | 'base' | 'lg'
    variant?: string | 'outlined' | 'underlined' | 'filled'
    label?: string,
    isInvalid?: boolean | true | false,
    errors?: string[],
    description?: string,
    rounded?: boolean | true | false,
    passwordReveal?: boolean | true | false
}