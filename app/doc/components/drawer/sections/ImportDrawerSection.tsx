import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function ImportDrawerSection() {
    const codeBlock = `import { BuiDrawer } from 'pearkit';`
    return (
        <BuiComponentShowcaseArea
            anchor="import"
            title="Drawer"
            desc={<>Drawer, also known as Sidebar, is a container component displayed as an overlay.</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportDrawerSection;