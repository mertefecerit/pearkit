import ImportCheckboxSection from "@/app/doc/components/checkbox/sections/ImportCheckboxSection";
import BasicCheckboxSection from "@/app/doc/components/checkbox/sections/BasicCheckboxSection";
import ColorsCheckboxSection from "@/app/doc/components/checkbox/sections/ColorsCheckboxSection";
import LabelCheckboxSection from "@/app/doc/components/checkbox/sections/LabelCheckboxSection";
import InvalidCheckboxSection from "@/app/doc/components/checkbox/sections/InvalidCheckboxSection";
import DisabledCheckboxSection from "@/app/doc/components/checkbox/sections/DisabledCheckboxSection";
import AccessibilityCheckboxSection from "@/app/doc/components/checkbox/sections/AccessibilityCheckboxSection";
import ApiCheckboxSection from "@/app/doc/components/checkbox/sections/ApiCheckboxSection";

export const metadata = {
    title: 'Checkbox',
    description: 'Checkboxes allow the user to select one or more items from a set.'
}
function CheckboxPage(props) {
    return (
        <>
            <ImportCheckboxSection />
            <BasicCheckboxSection />
            <LabelCheckboxSection />
            <ColorsCheckboxSection />
            <InvalidCheckboxSection />
            <DisabledCheckboxSection />
            <AccessibilityCheckboxSection />
            <ApiCheckboxSection />
        </>
    );
}

export default CheckboxPage;