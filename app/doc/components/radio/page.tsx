import ImportRadioSection from "@/app/doc/components/radio/sections/ImportRadioSection";
import BasicRadioSection from "@/app/doc/components/radio/sections/BasicRadioSection";
import ColorsRadioSection from "@/app/doc/components/radio/sections/ColorsRadioSection";
import InvalidRadioSection from "@/app/doc/components/radio/sections/InvalidRadioSection";
import DisabledRadioSection from "@/app/doc/components/radio/sections/DisabledRadioSection";
import AccessibilityRadioSection from "@/app/doc/components/radio/sections/AccessibilityRadioSection";
import ApiRadioSection from "@/app/doc/components/radio/sections/ApiRadioSection";

export const metadata = {
    title : 'Radio',
    description : 'Just as it receives all input attributes, you can also send a label prop. Here is a simple usage.',
    keywords: 'react, radio'
}

function Page() {
    return (
        <>
            <ImportRadioSection />
            <BasicRadioSection />
            <ColorsRadioSection />
            <InvalidRadioSection />
            <DisabledRadioSection />
            <AccessibilityRadioSection />
            <ApiRadioSection />
        </>
    );
}

export default Page;