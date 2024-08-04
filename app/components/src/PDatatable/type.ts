import React from "react";
import {TwColor} from "../types/TwColor";

export type TableStateType = {
    limit: number
    skip: number
    order: string | 'asc' | 'desc'
    search: string
    sortBy: string
}

export interface IPDatatablePropTypes {
    config: {
        columns:{
            name: string
            field: string
        }[],
        loader: (synchronizedTableState:string) => void
        stack: {}[]
        limit?:number,
        total:number,
        isPending?:boolean | true | false
        color?: string | TwColor
        limits?: {
            label: string,
            value: number
        }[]
    },
}

export interface IPDatatableProviderTypes {
    children: React.ReactNode;
    config: IPDatatablePropTypes['config']
}

export type PDatatableActionTypes =
    { type: 'SET_LIMIT'; value: TableStateType['limit'] } |
    { type: 'SET_SKIP'; value: TableStateType['skip'] } |
    { type: 'SET_ORDER'; value: TableStateType['order'] } |
    { type: 'SET_SEARCH'; value: TableStateType['search'] } |
    { type: 'SET_SORTBY'; value: TableStateType['sortBy'] }

export interface IPDatatableContextTypes {
    config: IPDatatablePropTypes['config'];
    tableState: TableStateType,
    limits:{
        label: string,
        value: number
    }[],
    color: string | TwColor,
    dispatch:React.Dispatch<PDatatableActionTypes>,
}