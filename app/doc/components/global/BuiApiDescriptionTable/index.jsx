import styles from './BuiApiDescriptionTable.module.scss';
import BuiCode from "@/app/components/src/BuiCode";

function BuiApiDescriptionTable({content}) {
    return (
        <div className={styles.BuiApiDescriptionTableWrapper}>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                    <th>Available Values</th>
                </tr>
                </thead>
                <tbody>
                {
                    content && content.map((row, r) => (
                        <tr key={r}>
                            <td><BuiCode>{row.name}</BuiCode></td>
                            <td>{row.type}</td>
                            <td><BuiCode color="gray">{row.default}</BuiCode></td>
                            <td>{row.description}</td>
                            {
                                row.values && <td><BuiCode color="gray">{row.values}</BuiCode></td>
                            }
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default BuiApiDescriptionTable;


