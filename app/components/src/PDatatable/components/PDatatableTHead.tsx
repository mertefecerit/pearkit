import React from 'react';
import {usePDatatable} from "../PDatatableProvider";
import styles from "../assets/scss/PDatatableTHead.module.scss";
import SortIcon from "../../components/icons/SortIcon";
import SortAscendingIcon from "../../components/icons/SortAscendingIcon";
import SortDescendingIcon from "../../components/icons/SortDescendingIcon";

const PDatatableTHead = () => {
    const {config, tableState,dispatch} = usePDatatable();
    const sortHandler = (field: string) => {
        let order = '';
        let sortBy = field;
        switch (tableState.order) {
            case 'asc':
                order = 'desc';
                break;
            case 'desc':
                order = '';
                sortBy =  '';
                break;
            default:
                order = 'asc';
                break;
        }
        dispatch({type:'SET_SORTBY',value:sortBy})
        dispatch({type:'SET_ORDER',value:order})
    }
    return (
        <thead className={styles.thead}>
        <tr>
            {
                config.columns.map((column, c) =>
                    <th onClick={() => sortHandler(column.field)} key={c}>
                        <div>
                            {column.name}
                            {
                                (tableState.order === '') && <SortIcon />
                            }
                            {
                                (tableState.order === 'asc' && column.field === tableState.sortBy) && <SortAscendingIcon />
                            }
                            {
                                (tableState.order === 'desc' && column.field === tableState.sortBy) && <SortDescendingIcon />
                            }
                        </div>
                    </th>
                )
            }
        </tr>
        </thead>
    );
};

export default PDatatableTHead;