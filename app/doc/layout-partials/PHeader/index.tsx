"use client"
import styles from './PHeader.module.scss';
import PNav from "@/app/doc/layout-partials/PNavAside/PNav";
import {useState} from "react";
import PHeaderMenu from "@/app/doc/layout-partials/PHeaderMenu";
import PLogo from "@/app/doc/components/global/PLogo";
import PMobileSidebar from "@/app/doc/components/global/PMobileSidebar";

const PHeader = () => {
    const [mobileSidebarStatus, setMobileSidebarStatus] = useState(false);
    return (
        <header className={`${styles.wrapper}`}>
            <div className="flex gap-2 items-center justify-between">
                <PLogo/>
                <PHeaderMenu mobileSidebarToggle={() => setMobileSidebarStatus(true)}/>
            </div>
            <PMobileSidebar
                status={mobileSidebarStatus}
                close={() => setMobileSidebarStatus(false)}
            >
                <PNav/>
            </PMobileSidebar>
        </header>
    );
}

export default PHeader;


