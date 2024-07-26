import BasicModalSection from "@/app/doc/components/modal/sections/BasicModalSection";
import ImportModalSection from "@/app/doc/components/modal/sections/ImportModalSection";
import ApiModalSection from "@/app/doc/components/modal/sections/ApiModalSection";
import AccessibilityModalSection from "@/app/doc/components/modal/sections/AccessibilityModalSection";

export const metadata = {
    title: 'Modal',
    description: 'A simple modal component wrapped into an BuiOverlay component.'
}
function ModalPage() {

    return (
        <>
            <ImportModalSection />
            <BasicModalSection />
            <AccessibilityModalSection />
            <ApiModalSection />
        </>
    );
}

export default ModalPage;