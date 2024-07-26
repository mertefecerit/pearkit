import React from "react";
import {Positions} from "@/app/components/src/types/Positions";
import {Variant} from "framer-motion";

type BuiDrawerType = React.HTMLAttributes<HTMLDivElement>;

export interface IBuiDrawerPropTypes extends BuiDrawerType {
    status: true | false,
    close: () => void
    position?: Positions,
}

export interface IVariants {
    [key: string]: Variant;
    visible: { x?: number; y?: number };
    hidden: { x?: string; y?: string };
}