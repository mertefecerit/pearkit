import scss from "./layout.module.scss";
import BuiNavAside from "@/app/doc/layout-partials/BuiNavAside";
import BuiRightNavAside from "@/app/doc/layout-partials/BuiRightNavAside";
import BuiHeader from "@/app/doc/layout-partials/BuiHeader";

function DocLayout({children}) {

    return (
        <section className={scss.layout}>
            <BuiHeader />
            <BuiNavAside />
            <main>
                {children}
            </main>
            <BuiRightNavAside/>
        </section>
    )
}

export default DocLayout;