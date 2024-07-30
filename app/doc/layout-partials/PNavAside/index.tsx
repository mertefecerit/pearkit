import styles from "./PNavAside.module.scss";
import PNav from "@/app/doc/layout-partials/PNavAside/PNav";

function PNavAside() {

    return (
        <aside className={styles.wrapper}>
            <PNav />
        </aside>
    )
}

export default PNavAside;