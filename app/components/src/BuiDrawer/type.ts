import React from "react";

export interface IBuiDrawerPropTypes extends React.HTMLAttributes<HTMLDivElement> {
    status: true | false,
    close: () => void
    position?: string | 'left' | 'right' | 'top' | 'bottom',
}