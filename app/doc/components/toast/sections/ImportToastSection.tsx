import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTag} from "@/app/components/src";

function ImportToastSection() {
    const codeBlock = `import {PToastProvider, usePToast} from "pearkit;

<PToastProvider>
    // access usePToast hook,
</PToastProvider>    
`
    return (
        <PComponentShowcaseArea
            anchor="import"
            title="Toast"
            desc={<>Standard toast component for user interaction. Use <PTag label={"PToastProvider"}/> provider for access <PTag label={"usePToast"}/> hook from children components</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportToastSection;