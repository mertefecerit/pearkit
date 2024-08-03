"use client";

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
    const {config} = usePDatatable();
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
                <PDatatablePaginator />
            </div>
            {
                config.isPending && <div className={styles.isPending}>
                    <LoadingIcon size="3em"/>
                </div>
            }
        </div>
    );
};

export default PDatatableWrapper;