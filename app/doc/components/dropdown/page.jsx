import ImportDropdownSection from "@/app/doc/components/dropdown/sections/ImportDropdownSection";
import BasicDropdownSection from "@/app/doc/components/dropdown/sections/BasicDropdownSection";
import ApiDropdownSection from "@/app/doc/components/dropdown/sections/ApiDropdownSection";
import AccessibilityDropdownSection from "@/app/doc/components/dropdown/sections/AccessibilityDropdownSection";
import ColorsDropdownSection from "@/app/doc/components/dropdown/sections/ColorsDropdownSection";

function DropdownPage() {

    return (
        <>
            <ImportDropdownSection />
            <BasicDropdownSection />
            <ColorsDropdownSection />
            <AccessibilityDropdownSection />
            <ApiDropdownSection />
        </>
    );
}

export default DropdownPage;