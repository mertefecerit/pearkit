"use client"
import BComponentShowcaseArea from "@/app/components/BComponentShowcaseArea";

function ButtonSection(props) {

    return (
        <BComponentShowcaseArea
            title="Handling Clicks"
            desc={<>All components accept an <code className="bg-gray-100 px-1 py-0.5 text-sm rounded border">onClick</code> handler that is applied to the root DOM element.</>}
            codeBlock={`<BButton onClick={() => alert('its worked')}>Basic Button</BButton>`}
        ></BComponentShowcaseArea>
    )
}

export default ButtonSection;