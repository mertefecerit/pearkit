import BuiPaginator from "@/app/doc/components/global/BuiPaginator";
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
        <div className="flex flex-col gap-8">
            <ImportModalSection />
            <BasicModalSection />
            <AccessibilityModalSection />
            <ApiModalSection />
            <BuiPaginator
                prev={{label:'Overlay', path:'/doc/components/overlay'}}
                next={{label:'Switch', path:'/doc/components/switch'}}
            />
        </div>
    );
}

export default ModalPage;