import React, {useEffect, useState} from 'react';
import styles from "../assets/scss/PDatatablePaginator.module.scss";
import {usePDatatable} from "../PDatatableProvider";
import {ArrowBackIos, ArrowForwardIos} from "../../components/icons";

const PDatatablePaginator = () => {
    const {config,dispatch, tableState,color} = usePDatatable();
    const [pageNumbers, setPageNumbers] = useState<number[]>([]);
    const currentPage = Math.floor(tableState.skip / tableState.limit) + 1;
    const totalPages = Math.ceil(config.total / tableState.limit);

    useEffect(() => {
        let startPage = Math.max(currentPage - 2, 1);
        let endPage = Math.min(currentPage + 2, totalPages);
        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        } else if (endPage - startPage < 4) {
            if (startPage === 1) {
                endPage = Math.min(5, totalPages);
            } else if (endPage === totalPages) {
                startPage = Math.max(totalPages - 4, 1);
            }
        }
        let pageNumberStack:number[] = [];
        for (let i = startPage; i <= endPage; i++) {
            pageNumberStack.push(i);
        }
        setPageNumbers(pageNumberStack);
    }, [totalPages, currentPage,tableState]);


    const previousHandler = () => {
        if (currentPage > 1) {
            dispatch({type:'SET_SKIP',value:(tableState.skip - tableState.limit)})
        }
    }

    const nextHandler = () => {
        if (currentPage < totalPages) {
            dispatch({type:'SET_SKIP',value:(tableState.skip + tableState.limit)})
        }
    }

    const paginationInfo = () => {
        const currentShowingStart = tableState.skip + 1;
        const currentShowingEnd = (tableState.limit + tableState.skip);
        return <span>Showing {currentShowingStart} to {currentShowingEnd > config.total ? config.total : currentShowingEnd} of {config.total} entries</span>;
    }

    const selectPageHandler = (pageNumber:number) => {
        dispatch({type: 'SET_SKIP', value:(pageNumber-1) * tableState.limit })
    }

    return (
        <div className={`${styles.wrapper} ${styles[color]}`}>
            {paginationInfo()}
            <ul>
                <li onClick={previousHandler}>
                    <ArrowBackIos/>
                </li>
                {
                    pageNumbers.map((pageNumber, i) =>
                        <li className={currentPage === pageNumber ? styles.isSelected : ''}
                            onClick={() => selectPageHandler(pageNumber)} key={i}>{pageNumber}</li>
                    )
                }
                <li onClick={nextHandler}>
                    <ArrowForwardIos/>
                </li>
            </ul>
        </div>
    );
};

export default PDatatablePaginator;