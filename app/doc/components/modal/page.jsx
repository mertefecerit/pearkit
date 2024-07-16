import BuiPaginator from "@/app/doc/components/global/BuiPaginator";
import BasicModalSection from "@/app/doc/components/modal/sections/BasicModalSection";
import ImportModalSection from "@/app/doc/components/modal/sections/ImportModalSection";
import ApiModalSection from "@/app/doc/components/modal/sections/ApiModalSection";
import AccessibilityModalSection from "@/app/doc/components/modal/sections/AccessibilityModalSection";

function ModalPage() {

    return (
        <div className="flex flex-col gap-8">
            <ImportModalSection />
            <BasicModalSection />
            <AccessibilityModalSection />
            <ApiModalSection />
            <BuiPaginator
                prev={{label:'Overlay', path:'/doc/components/overlay'}}
            />
        </div>
    );
}

export default ModalPage;