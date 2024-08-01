import {TwColor} from "../types/TwColor";
import React from "react";

export type ValuesType = { [index: string] : string }[]
export interface IPSearchableSelectPropTypes {
    selected: {
        [index: string]: string;
    };
    placeholder?: string;
    selector: string,
    onChange?: ({}) => void;
    loader: (searchTerm?:string) => void;
    color?: TwColor
    values: ValuesType
    itemComponent?: React.ReactNode
    focusOpen?: boolean | true | false
    isPending?: boolean | true | false
    disabled?: boolean | true | false
}
