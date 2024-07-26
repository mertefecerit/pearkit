import ImportDrawerSection from "@/app/doc/components/drawer/sections/ImportDrawerSection";
import BasicDrawerSection from "@/app/doc/components/drawer/sections/BasicDrawerSection";
import AccessibilityDrawerSection from "@/app/doc/components/drawer/sections/AccessibilityDrawerSection";
import ApiDrawerSection from "@/app/doc/components/drawer/sections/ApiDrawerSection";
import PositionDrawerSection from "@/app/doc/components/drawer/sections/PositionDrawerSection";

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