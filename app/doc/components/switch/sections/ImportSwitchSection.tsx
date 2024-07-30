import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function ImportSwitchSection() {
    const codeBlock = `import { PSwitch } from 'pearkit';`
    return (
        <PComponentShowcaseArea
            anchor="import"
            title="Switch"
            desc={<></>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportSwitchSection;