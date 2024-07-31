import {PToastProvider} from "@/app/components/src";
import BasicToastSection from "@/app/doc/components/toast/sections/BasicToastSection";
import OptionsToastSection from "@/app/doc/components/toast/sections/OptionsToastSection";
import StatusToastSection from "@/app/doc/components/toast/sections/StatusToastSection";
import AccessibilityToastSection from "@/app/doc/components/toast/sections/AccessibilityToastSection";
import ApiToastSection from "@/app/doc/components/toast/sections/ApiToastSection";
import ImportToastSection from "@/app/doc/components/toast/sections/ImportToastSection";

const ToastPage = () => {
    return (
        <>
         <PToastProvider>
             <ImportToastSection />
             <BasicToastSection />
             <OptionsToastSection />
             <StatusToastSection />
             <AccessibilityToastSection />
             <ApiToastSection />
         </PToastProvider>
        </>
    );
};

export default ToastPage;