import ImportOverlaySection from "@/app/doc/components/overlay/sections/ImportOverlaySection";
import ApiOverlaySection from "@/app/doc/components/overlay/sections/ApiOverlaySection";
import AccessibilityOverlaySection from "@/app/doc/components/overlay/sections/AccessibilityOverlaySection";
import BasicOverlaySection from "@/app/doc/components/overlay/sections/BasicOverlaySection";
import ColorsOverlaySection from "@/app/doc/components/overlay/sections/ColorsOverlaySection";

export const metadata = {
    title : 'Overlay',
    description : 'A standard overlay usage. Whether you use our PCard component or do it yourself, it will answer all of them.',
    keywords: 'react, overlay'
}
function OverlayPage() {
    return (
        <>
            <ImportOverlaySection/>
            <BasicOverlaySection />
            <ColorsOverlaySection />
            <AccessibilityOverlaySection />
            <ApiOverlaySection />
        </>
    );
}

export default OverlayPage;