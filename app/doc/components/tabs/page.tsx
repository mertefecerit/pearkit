import ImportTabsSection from "@/app/doc/components/tabs/sections/ImportTabsSection";
import BasicTabsSection from "@/app/doc/components/tabs/sections/BasicTabsSection";
import ActiveTabsSection from "@/app/doc/components/tabs/sections/ActiveTabsSection";
import ColorsTabsSection from "@/app/doc/components/tabs/sections/ColorsTabsSection";
import IconTabsSection from "@/app/doc/components/tabs/sections/IconTabsSection";
import DisabledTabsSection from "@/app/doc/components/tabs/sections/DisabledTabsSection";
import OverflowTabsSection from "@/app/doc/components/tabs/sections/OverflowTabsSection";
import AccessibilityTabsSection from "@/app/doc/components/tabs/sections/AccessibilityTabsSection";
import ApiTabsSection from "@/app/doc/components/tabs/sections/ApiTabsSection";

export const metadata = {
    title: 'Tabs',
    description: 'PTabs consists of one or more PTab components.',
    keywords: 'react, tabs'
}
const TabsPage = () => {
    return (
        <>
            <ImportTabsSection />
            <BasicTabsSection />
            <ActiveTabsSection />
            <ColorsTabsSection />
            <IconTabsSection />
            <DisabledTabsSection />
            <OverflowTabsSection />
            <AccessibilityTabsSection />
            <ApiTabsSection />
        </>
    )
}

export default TabsPage;