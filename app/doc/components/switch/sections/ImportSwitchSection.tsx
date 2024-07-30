import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function ImportSwitchSection() {
    const codeBlock = `import { BuiSwitch } from 'pearkit';`
    return (
        <BuiComponentShowcaseArea
            anchor="import"
            title="Switch"
            desc={<></>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportSwitchSection;