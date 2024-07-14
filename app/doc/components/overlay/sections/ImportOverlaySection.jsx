import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function ImportOverlaySection() {
    const codeBlock = `import { BuiOverlay } from '@mertefecerit/bubbleui';`
    return (
        <BuiComponentShowcaseArea
            anchor="import"
            title="Input"
            desc={<></>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportOverlaySection;