import styles from './BuiApiDescriptionTable.module.scss';
import BuiTag from "@/app/components/src/BuiTag";
import React from "react";
import {IBuiApiDescriptionTablePropTypes} from "./type";

const BuiApiDescriptionTable:React.FC<IBuiApiDescriptionTablePropTypes> = ({content}) => {
    return (
        <div className={styles.BuiApiDescriptionTableWrapper}>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {
                    content && content.map((row, r) => (
                        <tr key={r}>
                            <td><BuiTag label={row.name}/></td>
                            <td>{row.type}</td>
                            <td><BuiTag color="gray" label={row.default}/></td>
                            <td>{row.description}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default BuiApiDescriptionTable;


