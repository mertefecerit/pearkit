import ImportCardSection from "@/app/doc/components/card/sections/ImportCardSection";
import BasicCardSection from "@/app/doc/components/card/sections/BasicCardSection";
import AdvancedCardSection from "@/app/doc/components/card/sections/AdvancedCardSection";
import ApiCardSection from "@/app/doc/components/card/sections/ApiCardSection";
import AccessibilityCardSection from "@/app/doc/components/card/sections/AccessibilityCardSection";

export const metadata = {
    title: 'Card',
    description: 'A simple Card is created with a title property along with the content as children.'
}
function Page() {
    return (
        <>
            <ImportCardSection />
            <BasicCardSection />
            <AdvancedCardSection/>
            <AccessibilityCardSection/>
            <ApiCardSection />
        </>
    );
}

export default Page;