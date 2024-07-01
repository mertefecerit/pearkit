import scss from "./layout.module.scss";
import BNav from "@/app/doc/layout-partials/BNav";
import BLogo from "@/app/components/BLogo";

function DocLayout({children}) {
    return (
        <section className={scss.layout}>
            <header>
                <BLogo/>
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