import ImportDropdownSection from "@/app/doc/components/dropdown/sections/ImportDropdownSection";
import BasicDropdownSection from "@/app/doc/components/dropdown/sections/BasicDropdownSection";
import ApiDropdownSection from "@/app/doc/components/dropdown/sections/ApiDropdownSection";
import AccessibilityDropdownSection from "@/app/doc/components/dropdown/sections/AccessibilityDropdownSection";
import ColorsDropdownSection from "@/app/doc/components/dropdown/sections/ColorsDropdownSection";
import DisabledDropdownSection from "@/app/doc/components/dropdown/sections/DisabledDropdownSection";

export const metadata = {
    title: 'Dropdown',
    description: 'Dropdown is flexible form select component.',
    keywords: 'react, dropdown'
}
function DropdownPage() {
    return (
        <>
            <ImportDropdownSection />
            <BasicDropdownSection />
            <ColorsDropdownSection />
            <DisabledDropdownSection />
            <AccessibilityDropdownSection />
            <ApiDropdownSection />
        </>
    );
}

export default DropdownPage;