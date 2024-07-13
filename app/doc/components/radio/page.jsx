import ImportRadioSection from "@/app/doc/components/radio/sections/ImportRadioSection";
import BasicRadioSection from "@/app/doc/components/radio/sections/BasicRadioSection";
import ColorsRadioSection from "@/app/doc/components/radio/sections/ColorsRadioSection";
import InvalidRadioSection from "@/app/doc/components/radio/sections/InvalidRadioSection";
import DisabledRadioSection from "@/app/doc/components/radio/sections/DisabledRadioSection";
import AccessibilityRadioSection from "@/app/doc/components/radio/sections/AccessibilityRadioSection";
import ApiRadioSection from "@/app/doc/components/radio/sections/ApiRadioSection";
import BuiPaginator from "@/app/doc/components/global/BuiPaginator";

function Page() {
    return (
        <div className="flex flex-col gap-8">
            <ImportRadioSection />
            <BasicRadioSection />
            <ColorsRadioSection />
            <InvalidRadioSection />
            <DisabledRadioSection />
            <AccessibilityRadioSection />
            <ApiRadioSection />
            <BuiPaginator
                prev={{label:'Input', path:'/doc/components/input'}}
            />
        </div>
    );
}

export default Page;