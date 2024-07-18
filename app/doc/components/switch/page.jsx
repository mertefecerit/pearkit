import BasicSwitchSection from "@/app/doc/components/switch/sections/BasicSwitchSection";
import ImportSwitchSection from "@/app/doc/components/switch/sections/ImportSwitchSection";
import ApiSwitchSection from "@/app/doc/components/switch/sections/ApiSwitchSection";
import AccessibilitySwitchSection from "@/app/doc/components/switch/sections/AccessibilitySwitchSection";
import BuiPaginator from "@/app/doc/components/global/BuiPaginator";
import ColorsSwitchSection from "@/app/doc/components/switch/sections/ColorsSwitchSection";
import DisabledSwitchSection from "@/app/doc/components/switch/sections/DisabledSwitchSection";

function SwitchPage(props) {

    return (
        <div className="flex flex-col gap-8">
            <ImportSwitchSection />
            <BasicSwitchSection />
            <ColorsSwitchSection />
            <DisabledSwitchSection />
            <AccessibilitySwitchSection />
            <ApiSwitchSection />
            <BuiPaginator
                prev={{label:'Modal', path:'/doc/components/modal'}}
            />
        </div>
    );
}

export default SwitchPage;