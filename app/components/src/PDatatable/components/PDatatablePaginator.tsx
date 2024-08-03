import React, {useEffect, useState} from 'react';
import styles from "../assets/scss/PDatatablePaginator.module.scss";
import {usePDatatable} from "../PDatatableProvider";

const PDatatablePaginator = () => {
    const {config,setTableState, tableState} = usePDatatable();
    const [pageNumbers, setPageNumbers] = useState<number[]>([]);

    const currentPage = Math.floor(tableState.skip / tableState.limit) + 1;
    const totalPages = Math.ceil(config.total / tableState.limit);

    useEffect(() => {
        let pageNumberStack:number[] = [];
        for (let i=1; i <= totalPages; i++) {
            pageNumberStack.push(i);
        }
        setPageNumbers(pageNumberStack);
    }, [tableState]);


    const previousHandler = () => {
        if (currentPage > 1) {
            setTableState({...tableState, skip: (tableState.skip - tableState.limit) })
        }
    }

    const nextHandler = () => {
        if (currentPage < totalPages) {
            setTableState({...tableState, skip: (tableState.skip + tableState.limit) })
        }
    }

    const paginationInfo = () => {
        const currentShowingStart = tableState.skip + 1;
        const currentShowingEnd = (tableState.limit + tableState.skip);
        return <span>Showing {currentShowingStart} to {currentShowingEnd > config.total ? config.total : currentShowingEnd} of {config.total} entries</span>;
    }

    return (
        <div className={styles.wrapper}>
            {paginationInfo()}
            <ul>
                <li onClick={previousHandler}>
                    {"<"}
                </li>
                <li>
                    {currentPage}
                </li>
                <li onClick={nextHandler}>
                    {">"}
                </li>
            </ul>
        </div>
    );
};

export default PDatatablePaginator;