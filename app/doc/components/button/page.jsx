import ImportButtonSection from "@/app/doc/components/button/sections/ImportButtonSection";
import BasicButtonSection from "@/app/doc/components/button/sections/BasicButtonSection";
import LinkButtonSection from "@/app/doc/components/button/sections/LinkButtonSection";
import IconButtonSection from "@/app/doc/components/button/sections/IconButtonSection";
import LoadingButtonSection from "@/app/doc/components/button/sections/LoadingButtonSection";
import ColorButtonSection from "@/app/doc/components/button/sections/ColorButtonSection";
import DisabledButtonSection from "@/app/doc/components/button/sections/DisabledButtonSection";
import VariantButtonSection from "@/app/doc/components/button/sections/VariantButtonSection";
import RaisedButtonSection from "@/app/doc/components/button/sections/RaisedButtonSection";
import RoundedButtonSection from "@/app/doc/components/button/sections/RoundedButtonSection";
import SizesButtonSection from "@/app/doc/components/button/sections/SizesButtonSection";
import AccessibilityButtonSection from "@/app/doc/components/button/sections/AccessibilityButtonSection";
import ButtonGroupSection from "@/app/doc/components/button/sections/ButtonGroupSection";
import ApiButtonSection from "@/app/doc/components/button/sections/ApiButtonSection";
import BuiPaginator from "@/app/doc/components/global/BuiPaginator";


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
            <RoundedButtonSection />
            <SizesButtonSection />
            <ButtonGroupSection />
            <AccessibilityButtonSection />
            <ApiButtonSection />
            <BuiPaginator
                next={{label:'Badge', path:'/doc/components/badge'}}
                prev={{label:'Installation', path:'/doc/getting-started/installation'}}
            />
        </div>
    )
}

export default ButtonComponentPage;