import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function ImportInputSection() {
    const codeBlock = `import { PInput } from 'pearkit';`
    return (
        <PComponentShowcaseArea
            anchor="import"
            title="Input"
            desc={<>Input component is standard form object</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportInputSection;