import scss from "./layout.module.scss";
import PNavAside from "@/app/doc/layout-partials/PNavAside";
import PRightNavAside from "@/app/doc/layout-partials/PRightNavAside";
import PHeader from "@/app/doc/layout-partials/PHeader";
import PPaginator from "@/app/doc/components/global/PPaginator";
import React from "react";

function DocLayout({children}: Readonly<{ children: React.ReactNode}>) {

    return (
        <div className={scss.layout}>
            <PHeader />
            <PNavAside />
            <main>
                {children}
                <PPaginator />
            </main>
            <PRightNavAside/>
        </div>
    )
}

export default DocLayout;