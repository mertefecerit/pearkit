import scss from "./layout.module.scss";
import BuiNavAside from "@/app/doc/layout-partials/BuiNavAside";
import BuiRightNavAside from "@/app/doc/layout-partials/BuiRightNavAside";
import BuiHeader from "@/app/doc/layout-partials/BuiHeader";
import BuiPaginator from "@/app/doc/components/global/BuiPaginator";
import React from "react";

function DocLayout({children}: Readonly<{ children: React.ReactNode}>) {

    return (
        <div className={scss.layout}>
            <BuiHeader />
            <BuiNavAside />
            <main>
                {children}
                <BuiPaginator />
            </main>
            <BuiRightNavAside/>
        </div>
    )
}

export default DocLayout;