import React from 'react';
import {usePDatatable} from "../PDatatableProvider";
import styles from "../assets/scss/PDatatableTBody.module.scss";

const PDatatableTBody = () => {
    const {config,color} = usePDatatable();
    return (
        <tbody className={styles.tbody}>
        {
            (config.stack && config.stack.length > 0) &&
            config.stack.map((value: { [index: string]: string }, index) =>
                <tr key={index} className={styles[color]}>
                    {
                        config.columns.map((column, c) =>
                            <td key={c}>
                                {value[column.field]}
                            </td>
                        )
                    }
                </tr>
            )
        }
        </tbody>
    );
};

export default PDatatableTBody;