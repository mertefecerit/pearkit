import ImportOverlaySection from "@/app/doc/components/overlay/sections/ImportOverlaySection";
import ApiOverlaySection from "@/app/doc/components/overlay/sections/ApiOverlaySection";
import AccessibilityOverlaySection from "@/app/doc/components/overlay/sections/AccessibilityOverlaySection";
import BasicOverlaySection from "@/app/doc/components/overlay/sections/BasicOverlaySection";
import ColorsOverlaySection from "@/app/doc/components/overlay/sections/ColorsOverlaySection";
import BuiPaginator from "@/app/doc/components/global/BuiPaginator";
export const metadata = {
    title : 'Overlay',
    description : 'A standard overlay usage. Whether you use our BuiCard component or do it yourself, it will answer all of them.',
}
function OverlayPage(props) {
    return (
        <div className="flex flex-col gap-8">
            <ImportOverlaySection/>
            <BasicOverlaySection />
            <ColorsOverlaySection />
            <AccessibilityOverlaySection />
            <ApiOverlaySection />
            <BuiPaginator
                prev={{label:'Radio', path:'/doc/components/radio'}}
                next={{label:'Modal', path:'/doc/components/modal'}}
            />
        </div>
    );
}

export default OverlayPage;