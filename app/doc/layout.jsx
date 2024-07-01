import scss from "./layout.module.scss";
import BNav from "@/app/doc/layout-partials/BNav";

function DocLayout({children}) {
    return (
        <section className={scss.layout}>
            <header>Header</header>
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