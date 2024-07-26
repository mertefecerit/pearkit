import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function ImportInputSection() {
    const codeBlock = `import { BuiInput } from '@mertefecerit/bubbleui';`
    return (
        <BuiComponentShowcaseArea
            anchor="import"
            title="Input"
            desc={<>Input component is standard form object</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportInputSection;