import scss from "./layout.module.scss";
import BNav from "@/app/doc/layout-partials/BNav";
import BuiLogo from "@/app/components/BuiLogo";

function DocLayout({children}) {
    return (
        <section className={scss.layout}>
            <header>
                <BuiLogo/>
            </header>
            <aside>
                <BNav/>
            </aside>
            <main>
                {children}
            </main>
        </section>
    )
}

export default DocLayout;