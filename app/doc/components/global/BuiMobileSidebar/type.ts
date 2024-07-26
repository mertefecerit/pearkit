import React from "react";

export interface IBuiMobileSidebarPropTypes extends React.HTMLAttributes<HTMLDivElement> {
    status:boolean | true | false
    close: () => void
}