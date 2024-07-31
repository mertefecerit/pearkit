import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function ImportAlertSection() {
    const codeBlock = `import { PAlert } from 'pearkit';`
    return (
        <PComponentShowcaseArea
            anchor="import"
            title="Alert"
            desc={<>Alert messages are used for user interaction.</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportAlertSection;