import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function ImportModalSection() {
    const codeBlock = `import { PModal } from 'pearkit';`
    return (
        <PComponentShowcaseArea
            anchor="import"
            title="Modal"
            desc={<>Modal components are used to enable users to display messages or forms without leaving the page.</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportModalSection;