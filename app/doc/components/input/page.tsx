import ImportInputSection from "@/app/doc/components/input/sections/ImportInputSection";
import BasicInputSection from "@/app/doc/components/input/sections/BasicInputSection";
import ApiInputSection from "@/app/doc/components/input/sections/ApiInputSection";
import AccessibilityInputSection from "@/app/doc/components/input/sections/AccessibilityInputSection";
import SizesInputSection from "@/app/doc/components/input/sections/SizesInputSection";
import VariantsInputSection from "@/app/doc/components/input/sections/VariantsInputSection";
import RoundedInputSection from "@/app/doc/components/input/sections/RoundedInputSection";
import InvalidInputSection from "@/app/doc/components/input/sections/InvalidInputSection";
import ErrorsInputSection from "@/app/doc/components/input/sections/ErrorsInputSection";
import LabelInputSection from "@/app/doc/components/input/sections/LabelInputSection";
import DescriptionInputSection from "@/app/doc/components/input/sections/DescriptionInputSection";
import LoadingInputSection from "@/app/doc/components/input/sections/LoadingInputSection";
import DisabledInputSection from "@/app/doc/components/input/sections/DisabledInputSection";
import IconInputSection from "@/app/doc/components/input/sections/IconInputSection";
import PasswordRevealInputSection from "@/app/doc/components/input/sections/PasswordRevealInputSection";

export const metadata = {
    title: 'Input',
    description: 'It is the standard input element that you can use in forms. Gets all form attributes.',
    keywords: 'react, input'
}
function InputComponentPage() {
    return (
        <>
            <ImportInputSection/>
            <BasicInputSection/>
            <VariantsInputSection/>
            <SizesInputSection/>
            <RoundedInputSection/>
            <InvalidInputSection/>
            <ErrorsInputSection/>
            <LabelInputSection/>
            <DescriptionInputSection/>
            <LoadingInputSection/>
            <DisabledInputSection/>
            <IconInputSection/>
            <PasswordRevealInputSection/>
            <AccessibilityInputSection/>
            <ApiInputSection/>
        </>
    );
}

export default InputComponentPage;