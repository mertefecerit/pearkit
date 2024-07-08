import BuiNavItem from "./BuiNavItem";
import AsideContent from "@/app/doc/layout-partials/AsideContent";
import styles from "./BuiNav.module.scss";

function BuiNav() {
    const routes = AsideContent();
    return (
        <aside>
            <nav className={styles.BuiNav}>
                {
                    routes.map((route, i) => (
                        <BuiNavItem
                            key={i}
                            label={route.label}
                            childItems={route.children}
                        />
                    ))
                }
            </nav>
        </aside>
    )
}

export default BuiNav;