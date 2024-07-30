import AsideContent from "../AsideContent";
import PNavItem from "./PNavItem";
import styles from "./PNav.module.scss";

const PNav = () => {
    const routes = AsideContent();
    return (
        <nav className={styles.wrapper}>
            {
                routes.map((route, i) => (
                    <PNavItem
                        key={i}
                        label={route.label}
                        childItems={route.children}
                    />
                ))
            }
        </nav>
    )
}

export default PNav;