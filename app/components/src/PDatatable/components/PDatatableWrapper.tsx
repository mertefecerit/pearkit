import React from 'react';
import styles from "../assets/scss/PDatatable.module.scss";
import PDatatableTHead from "./PDatatableTHead";
import PDatatableTBody from "./PDatatableTBody";
import PDatatablePaginator from "./PDatatablePaginator";
import {usePDatatable} from "../PDatatableProvider";
import {LoadingIcon} from "../../components/icons";
import PDatatableLimit from "./PDatatableLimit";
import PDatatableSearch from "./PDatatableSearch";




const PDatatableWrapper:React.FC = () => {
    const {config,tableState, color} = usePDatatable();
    return (
        <div className={`${styles.wrapper}`}>
            <div className={styles.tableHeader}>
                <PDatatableLimit />
                <PDatatableSearch />
            </div>
            <div className={styles.tableContent}>
                <table>
                    <PDatatableTHead/>
                    <PDatatableTBody/>
                </table>
            </div>
            <div className={styles.tableFooter}>
                {
                    tableState.limit != 0 && <PDatatablePaginator />
                }
            </div>
            {
                config.isPending && <div className={`${styles.isPending} ${styles[color]}`}>
                    <LoadingIcon size="3em"/>
                </div>
            }
        </div>
    );
};

export default PDatatableWrapper;