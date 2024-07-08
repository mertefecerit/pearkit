import styles from "./BuiNavAside.module.scss";
import BuiNav from "@/app/doc/layout-partials/BuiNavAside/BuiNav";


function BuiNavAside() {

    return (
        <aside className={styles.BuiNavAside}>
            <BuiNav />
        </aside>
    )
}

export default BuiNavAside;