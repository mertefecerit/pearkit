import React from 'react';
import {usePDatatable} from "../PDatatableProvider";
import styles from "../assets/scss/PDatatableTHead.module.scss";

const PDatatableTHead = () => {
    const {config} = usePDatatable();
    return (
        <thead className={styles.thead}>
        <tr>
            {
                config.columns.map((column, c) =>
                    <th key={c}>
                        {column.name}
                    </th>
                )
            }
        </tr>
        </thead>
    );
};

export default PDatatableTHead;