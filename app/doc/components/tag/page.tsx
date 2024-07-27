import ImportTagSection from "@/app/doc/components/tag/sections/ImportTagSection";
import BasicTagSection from "@/app/doc/components/tag/sections/BasicTagSection";
import AccessibilityTagSection from "@/app/doc/components/tag/sections/AccessibilityTagSection";
import ApiTagSection from "@/app/doc/components/tag/sections/ApiTagSection";
import ColorsTagSection from "@/app/doc/components/tag/sections/ColorsTagSection";
import RoundedTagSection from "@/app/doc/components/tag/sections/RoundedTagSection";
import IconTagSection from "@/app/doc/components/tag/sections/IconTagSection";


function CodePage() {
    return (
        <>
            <ImportTagSection/>
            <BasicTagSection />
            <ColorsTagSection />
            <RoundedTagSection />
            <IconTagSection />
            <AccessibilityTagSection />
            <ApiTagSection/>
        </>
    );
}

export default CodePage;