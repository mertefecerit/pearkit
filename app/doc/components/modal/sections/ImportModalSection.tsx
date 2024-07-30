import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function ImportModalSection() {
    const codeBlock = `import { BuiModal } from 'pearkit';`
    return (
        <BuiComponentShowcaseArea
            anchor="import"
            title="Modal"
            desc={<>Modal components are used to enable users to display messages or forms without leaving the page.</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportModalSection;