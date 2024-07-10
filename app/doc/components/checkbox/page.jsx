import ImportCheckboxSection from "@/app/doc/components/checkbox/sections/ImportCheckboxSection";
import BasicCheckboxSection from "@/app/doc/components/checkbox/sections/BasicCheckboxSection";
import ColorsCheckboxSection from "@/app/doc/components/checkbox/sections/ColorsCheckboxSection";
import LabelCheckboxSection from "@/app/doc/components/checkbox/sections/LabelCheckboxSection";

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
        </div>
    );
}

export default CheckboxPage;