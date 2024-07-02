"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";

function ButtonSection(props) {

    return (
        <BuiComponentShowcaseArea
            title="Handling Clicks"
            desc={<>All components accept an <code className="bg-gray-100 px-1 py-0.5 text-sm rounded border">onClick</code> handler that is applied to the root DOM element.</>}
            codeBlock={`<BuiButton onClick={() => alert('its worked')}>Basic Button</BuiButton>`}
        ></BuiComponentShowcaseArea>
    )
}

export default ButtonSection;