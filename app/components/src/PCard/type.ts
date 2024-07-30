import React from "react";

export interface IPCardPropTypes extends React.HTMLAttributes<HTMLDivElement> {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    title?: string;
    subTitle?: string;
}