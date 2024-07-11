import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function ImportCheckboxSection() {
    const codeBlock = `import { BuiCheckbox } from 'bubble-ui/BuiCheckbox';`
    return (
        <BuiComponentShowcaseArea
            anchor="import"
            title="Checkbox"
            desc={<>Checkboxes allow the user to select one or more items from a set.</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportCheckboxSection;