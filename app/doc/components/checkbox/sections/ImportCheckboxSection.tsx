import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function ImportCheckboxSection() {
    const codeBlock = `import { PCheckbox } from 'pearkit';`
    return (
        <PComponentShowcaseArea
            anchor="import"
            title="Checkbox"
            desc={<>Checkboxes allow the user to select one or more items from a set.</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportCheckboxSection;