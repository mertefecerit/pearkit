import BasicBadgeSection from "@/app/doc/components/badge/sections/BasicBadgeSection";
import ImportBadgeSection from "@/app/doc/components/badge/sections/ImportBadgeSection";
import ColorsBadgeSection from "@/app/doc/components/badge/sections/ColorsBadgeSection";
import SizesBadgeSection from "@/app/doc/components/badge/sections/SizesBadgeSection";
import PositionBadgeSection from "@/app/doc/components/badge/sections/PositionBadgeSection";
import AccessibilityBadgeSection from "@/app/doc/components/badge/sections/AccessibilityBadgeSection";
import ApiBadgeSection from "@/app/doc/components/badge/sections/ApiBadgeSection";

export const metadata = {
    title: 'Badge',
    description: 'Badge is a small status indicator for another element.',
    keywords: 'react, badge'
}
function BadgeComponentPage(){
    return (
        <>
            <ImportBadgeSection />
            <BasicBadgeSection />
            <ColorsBadgeSection />
            <SizesBadgeSection/>
            <PositionBadgeSection/>
            <AccessibilityBadgeSection />
            <ApiBadgeSection />
        </>
    )
}

export default BadgeComponentPage