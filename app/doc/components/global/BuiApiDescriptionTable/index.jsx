import styles from './BuiApiDescriptionTable.module.scss';
import BuiTag from "@/app/components/src/BuiTag";

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
                            <td><BuiTag>{row.name}</BuiTag></td>
                            <td>{row.type}</td>
                            <td><BuiTag color="gray">{row.default}</BuiTag></td>
                            <td>{row.description}</td>
                            {
                                row.values && <td><BuiTag color="gray">{row.values}</BuiTag></td>
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


