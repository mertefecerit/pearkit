import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function ImportDropdownSection() {
    const codeBlock = `import { BuiDropdown } from '@mertefecerit/bubbleui';`
    return (
        <BuiComponentShowcaseArea
            anchor="import"
            title="Dropdown"
            desc={<>Dropdown is flexible form select component</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportDropdownSection;