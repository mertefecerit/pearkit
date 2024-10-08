import React from "react";
import {TwColor} from "../types/TwColor";

export interface IPOverlayPropTypes extends React.HTMLAttributes<HTMLDivElement> {
    status?: boolean | true | false;
    close?: () => void;
    color?: TwColor | string |'black' | 'white';
    closable?: boolean | true | false;
}