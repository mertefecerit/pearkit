import styles from './BuiMobileSidebar.module.scss';
import BuiLogo from "@/app/components/project/BuiLogo";
import {Icon} from "@iconify/react";

function BuiMobileSidebar({children}) {
    return (
        <div className={styles.BuiMobileSidebarWrapper}>
            <aside>
                <div className={styles.mobileLogo}>
                    <BuiLogo/>
                    <button className={styles.closeButton}><Icon icon="mdi:times"/></button>
                </div>
                <hr/>
                <div className={styles.mobileNav}>
                    {children}
                </div>
            </aside>
        </div>
    );
}

export default BuiMobileSidebar;


