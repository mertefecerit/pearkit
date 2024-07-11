"use client"
import styles from './BuiHeader.module.scss';

import BuiNav from "@/app/doc/layout-partials/BuiNavAside/BuiNav";
import {useState} from "react";
import BuiHeaderMenu from "@/app/doc/layout-partials/BuiHeaderMenu";
import BuiLogo from "@/app/doc/components/global/BuiLogo";
import BuiMobileSidebar from "@/app/doc/components/global/BuiMobileSidebar";

function BuiHeader() {
    const [mobileSidebarStatus, setMobileSidebarStatus] = useState(false);
    return (
        <header className={styles.BuiHeaderWrapper}>
            <div className="flex gap-2 items-center justify-between">
                <BuiLogo/>
                <BuiHeaderMenu mobileSidebarToggle={() => setMobileSidebarStatus(true)}/>
            </div>
            <BuiMobileSidebar
                status={mobileSidebarStatus}
                close={() => setMobileSidebarStatus(false)}
            >
                <BuiNav/>
            </BuiMobileSidebar>
        </header>
    );
}

export default BuiHeader;


