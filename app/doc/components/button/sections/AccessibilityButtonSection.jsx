import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiTag from "@/app/components/src/BuiTag";

function AccessibilityButtonSection(props) {
    const codeBlock = `<BuiButton ariaLabel="Submit Button">Submit</BuiButton>`;

    return (
        <BuiComponentShowcaseArea
            anchor="accessibility"
            title="Accessibility"
            desc={<>The Button component creates a native button element that implicitly contains any passed properties. The text that describes the button is defined by the <BuiTag label="aria-label"/> prop. If the button is icon-only or a custom template is used, using <BuiTag label="aria-label"/> is recommended so screen readers can read the element properly.</>}
            codeBlock={codeBlock}
        >
        </BuiComponentShowcaseArea>
    )
}

export default AccessibilityButtonSection;