import ImportButtonSection from "@/app/doc/components/button/sections/ImportButtonSection";
import BasicButtonSection from "@/app/doc/components/button/sections/BasicButtonSection";
import LinkButtonSection from "@/app/doc/components/button/sections/LinkButtonSection";
import IconButtonSection from "@/app/doc/components/button/sections/IconButtonSection";
import LoadingButtonSection from "@/app/doc/components/button/sections/LoadingButtonSection";
import ColorButtonSection from "@/app/doc/components/button/sections/ColorButtonSection";
import DisabledButtonSection from "@/app/doc/components/button/sections/DisabledButtonSection";
import VariantButtonSection from "@/app/doc/components/button/sections/VariantButtonSection";
import RaisedButtonSection from "@/app/doc/components/button/sections/RaisedButtonSection";


export const metadata = {
    title: 'Button',
    description: 'Buttons allow users to take actions, and make choices, with a single tap.'
}

function ButtonComponentPage() {
    return (
        <div className="flex flex-col gap-8">
            <ImportButtonSection/>
            <BasicButtonSection/>
            <VariantButtonSection />
            <LinkButtonSection/>
            <IconButtonSection/>
            <LoadingButtonSection />
            <ColorButtonSection />
            <DisabledButtonSection />
            <RaisedButtonSection />
        </div>
    )
}

export default ButtonComponentPage;