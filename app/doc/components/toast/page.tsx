import {BuiToastProvider} from "@/app/components/src";
import BasicToastSection from "@/app/doc/components/toast/sections/BasicToastSection";
import OptionsToastSection from "@/app/doc/components/toast/sections/OptionsToastSection";
import StatusToastSection from "@/app/doc/components/toast/sections/StatusToastSection";
import AccessibilityToastSection from "@/app/doc/components/toast/sections/AccessibilityToastSection";
import ApiToastSection from "@/app/doc/components/toast/sections/ApiToastSection";
import ImportToastSection from "@/app/doc/components/toast/sections/ImportToastSection";

const ToastPage = () => {
    return (
        <>
         <BuiToastProvider>
             <ImportToastSection />
             <BasicToastSection />
             <OptionsToastSection />
             <StatusToastSection />
             <AccessibilityToastSection />
             <ApiToastSection />
         </BuiToastProvider>
        </>
    );
};

export default ToastPage;