import BasicBadgeSection from "@/app/doc/components/badge/sections/BasicBadgeSection";
import ImportBadgeSection from "@/app/doc/components/badge/sections/ImportBadgeSection";
import ColorsBadgeSection from "@/app/doc/components/badge/sections/ColorsBadgeSection";
import SizesBadgeSection from "@/app/doc/components/badge/sections/SizesBadgeSection";
import PositionBadgeSection from "@/app/doc/components/badge/sections/PositionBadgeSection";
import AccessibilityBadgeSection from "@/app/doc/components/badge/sections/AccessibilityBadgeSection";

export const metadata = {
    title: 'Badge',
    description: 'Badge is a small status indicator for another element.'
}
function BadgeComponentPage(){
    return (
        <div className="flex flex-col gap-8">
            <ImportBadgeSection />
            <BasicBadgeSection />
            <ColorsBadgeSection />
            <SizesBadgeSection/>
            <PositionBadgeSection/>
            <AccessibilityBadgeSection />
        </div>
    )
}

export default BadgeComponentPage