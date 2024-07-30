import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function ImportOverlaySection() {
    const codeBlock = `import { POverlay } from 'pearkit';`
    return (
        <PComponentShowcaseArea
            anchor="import"
            title="Overlay"
            desc={<>Standard overlay component for any component</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportOverlaySection;