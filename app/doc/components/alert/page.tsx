import ImportAlertSection from "@/app/doc/components/alert/sections/ImportAlertSection";
import AccessibilityAlertSection from "@/app/doc/components/alert/sections/AccessibilityAlertSection";
import ApiAlertSection from "@/app/doc/components/alert/sections/ApiAlertSection";
import BasicAlertSection from "@/app/doc/components/alert/sections/BasicAlertSection";
import TypesAlertSection from "@/app/doc/components/alert/sections/TypesAlertSection";
import ClosableAlertSection from "@/app/doc/components/alert/sections/ClosableAlertSection";
import LifetimeAlertSection from "@/app/doc/components/alert/sections/LifetimeAlertSection";

const AlertPage = () => {

    return (
        <>
            <ImportAlertSection />
            <BasicAlertSection />
            <TypesAlertSection />
            <ClosableAlertSection />
            <LifetimeAlertSection />
            <AccessibilityAlertSection />
            <ApiAlertSection />
        </>
    );
};

export default AlertPage;