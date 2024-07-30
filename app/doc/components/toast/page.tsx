import {BuiToastProvider} from "@/app/components/src";
import BasicToastSection from "@/app/doc/components/toast/sections/BasicToastSection";
import PositionToastSection from "@/app/doc/components/toast/sections/PositionToastSection";
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
             <PositionToastSection />
             <StatusToastSection />
             <AccessibilityToastSection />
             <ApiToastSection />
         </BuiToastProvider>
        </>
    );
};

export default ToastPage;