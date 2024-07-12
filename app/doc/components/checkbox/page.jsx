import ImportCheckboxSection from "@/app/doc/components/checkbox/sections/ImportCheckboxSection";
import BasicCheckboxSection from "@/app/doc/components/checkbox/sections/BasicCheckboxSection";
import ColorsCheckboxSection from "@/app/doc/components/checkbox/sections/ColorsCheckboxSection";
import LabelCheckboxSection from "@/app/doc/components/checkbox/sections/LabelCheckboxSection";
import InvalidCheckboxSection from "@/app/doc/components/checkbox/sections/InvalidCheckboxSection";
import DisabledCheckboxSection from "@/app/doc/components/checkbox/sections/DisabledCheckboxSection";
import AccessibilityCheckboxSection from "@/app/doc/components/checkbox/sections/AccessibilityCheckboxSection";
import ApiCheckboxSection from "@/app/doc/components/checkbox/sections/ApiCheckboxSection";
import BuiPaginator from "@/app/doc/components/global/BuiPaginator";

export const metadata = {
    title: 'Checkbox',
    description: 'Checkboxes allow the user to select one or more items from a set.'
}
function CheckboxPage(props) {
    return (
        <div className="flex flex-col gap-8">
            <ImportCheckboxSection />
            <BasicCheckboxSection />
            <LabelCheckboxSection />
            <ColorsCheckboxSection />
            <InvalidCheckboxSection />
            <DisabledCheckboxSection />
            <AccessibilityCheckboxSection />
            <ApiCheckboxSection />
            <BuiPaginator
                prev={{label:'Badge', path:'/doc/components/badge'}}
                next={{label:'Card', path:'/doc/components/card'}}
            />
        </div>
    );
}

export default CheckboxPage;