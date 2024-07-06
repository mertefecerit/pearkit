import BNavItem from "./BNavItem";

function BNav({routes}) {
    return (
        <nav className="flex flex-col gap-2">
            {
                routes.map((route, i) => (
                    <BNavItem
                        key={i}
                        label={route.label}
                        childItems={route.children}
                    />
                ))
            }
        </nav>
    )
}

export default BNav;