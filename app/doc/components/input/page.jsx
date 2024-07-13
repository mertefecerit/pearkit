import ImportInputSection from "@/app/doc/components/input/sections/ImportInputSection";
import BasicInputSection from "@/app/doc/components/input/sections/BasicInputSection";
import ApiInputSection from "@/app/doc/components/input/sections/ApiInputSection";
import AccessibilityInputSection from "@/app/doc/components/input/sections/AccessibilityInputSection";
import SizesInputSection from "@/app/doc/components/input/sections/SizesInputSection";
import VariantsInputSection from "@/app/doc/components/input/sections/VariantsInputSection";
import RoundedInputSection from "@/app/doc/components/input/sections/RoundedInputSection";

function InputComponentPage(props) {
    return (
        <div className="flex flex-col gap-8">
            <ImportInputSection />
            <BasicInputSection />
            <VariantsInputSection />
            <SizesInputSection />
            <RoundedInputSection />
            <AccessibilityInputSection />
            <ApiInputSection />
        </div>
    );
}

export default InputComponentPage;