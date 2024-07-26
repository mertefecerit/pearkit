import BasicSwitchSection from "@/app/doc/components/switch/sections/BasicSwitchSection";
import ImportSwitchSection from "@/app/doc/components/switch/sections/ImportSwitchSection";
import ApiSwitchSection from "@/app/doc/components/switch/sections/ApiSwitchSection";
import AccessibilitySwitchSection from "@/app/doc/components/switch/sections/AccessibilitySwitchSection";
import ColorsSwitchSection from "@/app/doc/components/switch/sections/ColorsSwitchSection";
import DisabledSwitchSection from "@/app/doc/components/switch/sections/DisabledSwitchSection";

export const metadata = {
    title : 'Switch',
    description : 'Standard switch component for form components',
}

function SwitchPage() {

    return (
        <>
            <ImportSwitchSection />
            <BasicSwitchSection />
            <ColorsSwitchSection />
            <DisabledSwitchSection />
            <AccessibilitySwitchSection />
            <ApiSwitchSection />
        </>
    );
}

export default SwitchPage;