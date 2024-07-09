import BasicBadgeSection from "@/app/doc/components/badge/sections/BasicBadgeSection";
import ImportBadgeSection from "@/app/doc/components/badge/sections/ImportBadgeSection";
import ColorsBadgeSection from "@/app/doc/components/badge/sections/ColorsBadgeSection";
import SizesBadgeSection from "@/app/doc/components/badge/sections/SizesBadgeSection";

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
        </div>
    )
}

export default BadgeComponentPage