import ImportRadioSection from "@/app/doc/components/radio/sections/ImportRadioSection";
import BasicRadioSection from "@/app/doc/components/radio/sections/BasicRadioSection";
import LabelRadioSection from "@/app/doc/components/radio/sections/LabelRadioSection";
import ColorsRadioSection from "@/app/doc/components/radio/sections/ColorsRadioSection";
import InvalidRadioSection from "@/app/doc/components/radio/sections/InvalidRadioSection";
import DisabledRadioSection from "@/app/doc/components/radio/sections/DisabledRadioSection";
import AccessibilityRadioSection from "@/app/doc/components/radio/sections/AccessibilityRadioSection";
import ApiRadioSection from "@/app/doc/components/radio/sections/ApiRadioSection";

function Page() {
    return (
        <div className="flex flex-col gap-8">
            <ImportRadioSection />
            <BasicRadioSection />
            <LabelRadioSection />
            <ColorsRadioSection />
            <InvalidRadioSection />
            <DisabledRadioSection />
            <AccessibilityRadioSection />
            <ApiRadioSection />
        </div>
    );
}

export default Page;