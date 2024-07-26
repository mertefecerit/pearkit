import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function ImportRadioSection() {
    const codeBlock = `import { BuiRadio } from '@mertefecerit/bubbleui';`
    return (
        <BuiComponentShowcaseArea
            anchor="import"
            title="Radio"
            desc={<>A simple radio button but a little better in terms of design.</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportRadioSection;