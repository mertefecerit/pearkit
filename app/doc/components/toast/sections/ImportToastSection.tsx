import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiTag} from "@/app/components/src";

function ImportToastSection() {
    const codeBlock = `import {BuiToastProvider, useBuiToast} from "pearkit;

<BuiToastProvider>
    // access useBuiToast hook,
</BuiToastProvider>    
`
    return (
        <BuiComponentShowcaseArea
            anchor="import"
            title="Toast"
            desc={<>Standard toast component for user interaction. Use <BuiTag label={"BuiToastProvider"}/> provider for access <BuiTag label={"useBuiToast"}/> hook from children components</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportToastSection;