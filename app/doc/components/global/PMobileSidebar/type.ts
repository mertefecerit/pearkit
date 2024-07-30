import React from "react";

export interface IPMobileSidebarPropTypes extends React.HTMLAttributes<HTMLDivElement> {
    status:boolean | true | false
    close: () => void
}