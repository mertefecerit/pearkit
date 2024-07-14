import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function ImportOverlaySection() {
    const codeBlock = `import { BuiOverlay } from '@mertefecerit/bubbleui';`
    return (
        <BuiComponentShowcaseArea
            anchor="import"
            title="Overlay"
            desc={<>Standard overlay component for any component</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportOverlaySection;