import scss from "./layout.module.scss";
import BuiNav from "@/app/doc/layout-partials/BuiNav";
import BuiRightNav from "@/app/doc/layout-partials/BuiRightNav";
import BuiHeader from "@/app/doc/layout-partials/BuiHeader";

function DocLayout({children}) {

    return (
        <section className={scss.layout}>
            <BuiHeader />
            <BuiNav/>
            <main>
                {children}
            </main>
            <BuiRightNav/>
        </section>
    )
}

export default DocLayout;