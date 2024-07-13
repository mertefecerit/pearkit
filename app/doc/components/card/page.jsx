import BuiPaginator from "@/app/doc/components/global/BuiPaginator";
import ImportCardSection from "@/app/doc/components/card/sections/ImportCardSection";
import BasicCardSection from "@/app/doc/components/card/sections/BasicCardSection";
import AdvancedCardSection from "@/app/doc/components/card/sections/AdvancedCardSection";
import ApiCardSection from "@/app/doc/components/card/sections/ApiCardSection";
import AccessibilityCardSection from "@/app/doc/components/card/sections/AccessibilityCardSection";

function Page(props) {
    return (
        <div className="flex flex-col gap-8">
            <ImportCardSection />
            <BasicCardSection />
            <AdvancedCardSection/>
            <AccessibilityCardSection/>
            <ApiCardSection />
            <BuiPaginator
                prev={{label:'Checkbox', path:'/doc/components/checkbox'}}
                next={{label:'Input', path:'/doc/components/input'}}
            />
        </div>
    );
}

export default Page;