import React from "react";

export interface IBuiCardPropTypes extends React.HTMLAttributes<HTMLDivElement> {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    title?: string;
    subTitle?: string;
}