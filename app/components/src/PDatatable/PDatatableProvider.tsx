import React, {useCallback, useContext, useEffect, useReducer} from 'react';
import {
    IPDatatableProviderTypes,
    IPDatatableContextTypes,
    TableStateType,
    PDatatableActionTypes,
} from "./type";

const PDatatableContext = React.createContext<IPDatatableContextTypes | undefined>(undefined);

export const PDatatableProvider:React.FC<IPDatatableProviderTypes> = ({children, config}) => {

    const initialTableState = {
        limit: config.limit ?? 10,
        skip: 0,
        search: '',
        sortBy: '',
        order: ''
    }

    const tableStateReducer = (state:TableStateType, action:PDatatableActionTypes): TableStateType => {
        switch (action.type){
            case 'SET_LIMIT':
                return { ...state, limit: action.value };
            case 'SET_SKIP':
                return { ...state, skip: action.value };
            case 'SET_SEARCH':
                return { ...state, search: action.value };
            case 'SET_SORTBY':
                return { ...state, sortBy: action.value };
            case 'SET_ORDER':
                return { ...state, order: action.value };
            default:
                return state;
        }
    }

    const [tableState, dispatch] = useReducer(tableStateReducer, initialTableState)

    const limits= config.limits ?? [
        {label:'All',value:0},
        {label:'10',value:10},
        {label:'25',value:25},
        {label:'50',value:50},
        {label:'100',value:100},
    ];

    const color = config.color ?? "lime";

    const queryMaker = useCallback(() => {
        let paramArray = [];
        if (tableState.search) paramArray.push(`/search?q=${tableState.search}`);
        if (tableState.sortBy) paramArray.push(`sortBy=${tableState.sortBy}`);
        if (tableState.order) paramArray.push(`order=${tableState.order}`);
        if (tableState.limit) paramArray.push(`limit=${tableState.limit}`);
        if (tableState.skip) paramArray.push(`skip=${tableState.skip}`);

        if (tableState.search) {
            return paramArray.join('&');
        }else{
            return "?"+paramArray.join('&');
        }
    },[tableState.search, tableState.sortBy, tableState.order, tableState.limit, tableState.skip])

    useEffect(() => {
       config.loader(queryMaker());
    }, [tableState]);

    return (
        <PDatatableContext.Provider value={
            {
                config,
                tableState,
                limits,
                dispatch,
                color
            }
        }>
            {children}
        </PDatatableContext.Provider>
    );
};


export const usePDatatable = () => {
    const context = useContext(PDatatableContext);
    if (!context) {
        throw new Error('usePDatatable must be used within a PDatatableContext');
    }
    return context;
}

