"use client";

import React from "react";
import {IPDatatablePropTypes} from "./type";
import {PDatatableProvider} from "./PDatatableProvider";
import PDatatableWrapper from "./components/PDatatableWrapper";

const PDatatable:React.FC<IPDatatablePropTypes> = ({config}) => {
    return (
        <PDatatableProvider config={config}>
            <PDatatableWrapper />
        </PDatatableProvider>
    );
}

export default PDatatable;


