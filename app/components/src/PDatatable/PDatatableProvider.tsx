import React, {useContext, useEffect, useState} from 'react';
import {IPDatatableProviderTypes, IPDatatableContextTypes, TableStateType} from "./type";

const PDatatableContext = React.createContext<IPDatatableContextTypes | undefined>(undefined);

export const PDatatableProvider:React.FC<IPDatatableProviderTypes> = ({children, config}) => {

    const [tableState, setTableState] = useState<TableStateType>({
        limit: config.limit ?? 10,
        skip: 0,
        search: '',
        sortBy: '',
        order: ''
    })

    const limits= [10,25,50,100] ?? config.limits;

    const queryMaker = () => {
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
    }

    useEffect(() => {
        config.loader(queryMaker());
    }, [tableState]);

    return (
        <PDatatableContext.Provider value={
            {
                config,
                tableState,
                setTableState,
                limits
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

