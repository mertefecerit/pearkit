import ImportDrawerSection from "@/app/doc/components/drawer/sections/ImportDrawerSection";
import BasicDrawerSection from "@/app/doc/components/drawer/sections/BasicDrawerSection";
import AccessibilityDrawerSection from "@/app/doc/components/drawer/sections/AccessibilityDrawerSection";
import ApiDrawerSection from "@/app/doc/components/drawer/sections/ApiDrawerSection";
import PositionDrawerSection from "@/app/doc/components/drawer/sections/PositionDrawerSection";

export const metadata = {
    title: 'Drawer',
    description: 'Drawer, also known as Sidebar, is a container component displayed as an overlay.',
    keywords: 'react, drawer'
}
function DrawerPage() {
    return (
        <>
            <ImportDrawerSection />
            <BasicDrawerSection />
            <PositionDrawerSection />
            <AccessibilityDrawerSection />
            <ApiDrawerSection />
        </>
    );
}

export default DrawerPage;