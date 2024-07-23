import ImportTagSection from "@/app/doc/components/tag/sections/ImportTagSection";
import BasicTagSection from "@/app/doc/components/tag/sections/BasicTagSection";
import AccessibilityTagSection from "@/app/doc/components/tag/sections/AccessibilityTagSection";
import ApiTagSection from "@/app/doc/components/tag/sections/ApiTagSection";


function CodePage(props) {
    return (
        <>
            <ImportTagSection/>
            <BasicTagSection />
            <AccessibilityTagSection />
            <ApiTagSection/>
        </>
    );
}

export default CodePage;