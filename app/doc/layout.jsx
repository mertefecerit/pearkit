import scss from "./layout.module.scss";
import BNav from "@/app/doc/layout-partials/BNav";
import BuiLogo from "@/app/components/project/BuiLogo";
import AsideContent from "@/app/doc/layout-partials/AsideContent";
import BuiRightNav from "@/app/doc/layout-partials/BuiRightNav";

function DocLayout({children}) {
    const routes = AsideContent();
    return (
        <section className={scss.layout}>
            <header>
                <BuiLogo/>
            </header>
            <aside>
                <BNav routes={routes}/>
            </aside>
            <main>
                {children}
            </main>
            <aside>
                <BuiRightNav routes={routes}/>
            </aside>
        </section>
    )
}

export default DocLayout;