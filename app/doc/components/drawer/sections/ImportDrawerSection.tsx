import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function ImportDrawerSection() {
    const codeBlock = `import { PDrawer } from 'pearkit';`
    return (
        <PComponentShowcaseArea
            anchor="import"
            title="Drawer"
            desc={<>Drawer, also known as Sidebar, is a container component displayed as an overlay.</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportDrawerSection;