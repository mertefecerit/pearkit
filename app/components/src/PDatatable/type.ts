import React from "react";

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
        limits?:number[]
    }
}

export interface IPDatatableProviderTypes {
    children: React.ReactNode;
    config: IPDatatablePropTypes['config']
}

export interface IPDatatableContextTypes {
    config: IPDatatablePropTypes['config'];
    tableState: TableStateType,
    setTableState: (state: TableStateType) => void,
    limits:number[]
}