import React from "react";

export interface IPComponentShowcaseAreaPropTypes extends React.HTMLAttributes<HTMLDivElement> {
    title: string,
    desc: React.ReactNode | string,
    codeBlock?: string,
    anchor: string
}