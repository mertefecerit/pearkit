import ImportOverlaySection from "@/app/doc/components/overlay/sections/ImportOverlaySection";
import ApiOverlaySection from "@/app/doc/components/overlay/sections/ApiOverlaySection";
import AccessibilityOverlaySection from "@/app/doc/components/overlay/sections/AccessibilityOverlaySection";
import BasicOverlaySection from "@/app/doc/components/overlay/sections/BasicOverlaySection";
import ColorsOverlaySection from "@/app/doc/components/overlay/sections/ColorsOverlaySection";
export const metadata = {
    title : 'Overlay',
    description : 'Overlay description',
}
function OverlayPage(props) {
    return (
        <div className="flex flex-col gap-8">
            <ImportOverlaySection/>
            <BasicOverlaySection />
            <ColorsOverlaySection />
            <AccessibilityOverlaySection />
            <ApiOverlaySection />
        </div>
    );
}

export default OverlayPage;