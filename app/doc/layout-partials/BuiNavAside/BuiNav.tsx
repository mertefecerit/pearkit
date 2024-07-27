import AsideContent from "@/app/doc/layout-partials/AsideContent";
import BuiNavItem from "@/app/doc/layout-partials/BuiNavAside/BuiNavItem";
import styles from "./BuiNav.module.scss";

const BuiNav = () => {
    const routes = AsideContent();
    return (
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
    )
}

export default BuiNav;