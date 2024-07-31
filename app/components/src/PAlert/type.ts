import React from "react";
import {HTMLMotionProps} from "framer-motion";

export type AlertType = string | 'info' | 'warning' | 'danger' | 'success';
type MigratedAlertComponentType =
    React.HTMLAttributes<HTMLDivElement> &
    HTMLMotionProps<"div">
export interface IPAlertPropTypes extends MigratedAlertComponentType {
    type?: AlertType;
    message: string;
    status: boolean | true | false;
    close?: () => void;
    closable?: boolean | true | false;
    lifetime?: number
}
