import ImportInputSection from "@/app/doc/components/input/sections/ImportInputSection";
import BasicInputSection from "@/app/doc/components/input/sections/BasicInputSection";
import ApiInputSection from "@/app/doc/components/input/sections/ApiInputSection";
import AccessibilityInputSection from "@/app/doc/components/input/sections/AccessibilityInputSection";

function InputComponentPage(props) {
    return (
        <div className="flex flex-col gap-8">
            <ImportInputSection />
            <BasicInputSection />
            <AccessibilityInputSection />
            <ApiInputSection />
        </div>
    );
}

export default InputComponentPage;