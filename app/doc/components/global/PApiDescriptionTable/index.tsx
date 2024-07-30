import styles from './PApiDescriptionTable.module.scss';
import PTag from "@/app/components/src/PTag";
import React from "react";
import {IPApiDescriptionTablePropTypes} from "./type";

const PApiDescriptionTable:React.FC<IPApiDescriptionTablePropTypes> = ({content}) => {
    return (
        <div className={styles.wrapper}>
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
                            <td><PTag label={row.name}/></td>
                            <td>{row.type}</td>
                            <td><PTag color="gray" label={row.default}/></td>
                            <td>{row.description}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default PApiDescriptionTable;


