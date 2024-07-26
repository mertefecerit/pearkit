import React from "react";
import {HTMLMotionProps} from "framer-motion";
import {TwColor} from "@/app/components/src/types/TwColor";

type BuiModalType = React.HTMLAttributes<HTMLDivElement> & HTMLMotionProps<"div">
export interface IBuiModalPropType extends BuiModalType {
    modalHeader?: React.ReactNode;
    status?: boolean | true | false;
    closable?: boolean | true | false;
    modalTitle?: string;
    overlayColor?: TwColor | 'black' | 'white';
    overlayClassName?: string;
    size?: string | 'small' | 'default' | 'large' | 'full';
    close: () => void;
}