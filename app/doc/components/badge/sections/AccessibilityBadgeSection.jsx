import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";


function AccessibilityBadgeSection() {
    return (
        <BuiComponentShowcaseArea
            anchor="accessibility"
            title="Accessibility"
            desc={<>Badge does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required.</>}
        />
    )
}

export default AccessibilityBadgeSection;