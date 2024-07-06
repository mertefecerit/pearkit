"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";
import BuiCode from "@/app/components/BuiCode";

function ButtonHandlingClicksSection(props) {

    return (
        <BuiComponentShowcaseArea
            anchor="handling-clicks"
            title="Handling Clicks"
            desc={<>All components accept an <BuiCode>onClick</BuiCode> handler that is applied to the root DOM element.</>}
            codeBlock={`<BuiButton onClick={() => alert('its worked')}>Basic Button</BuiButton>`}
        ></BuiComponentShowcaseArea>
    )
}

export default ButtonHandlingClicksSection;