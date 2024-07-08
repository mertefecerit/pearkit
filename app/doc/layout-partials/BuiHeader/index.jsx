"use client"
import styles from './BuiHeader.module.scss';
import BuiLogo from "@/app/components/project/BuiLogo";
import BuiMobileSidebar from "@/app/components/project/BuiMobileSidebar";
import BuiNav from "@/app/doc/layout-partials/BuiNavAside/BuiNav";


function BuiHeader() {
    return (
        <header className={styles.BuiHeaderWrapper}>
            <BuiLogo/>
            <BuiMobileSidebar>
                <BuiNav />
            </BuiMobileSidebar>
        </header>
    );
}

export default BuiHeader;


