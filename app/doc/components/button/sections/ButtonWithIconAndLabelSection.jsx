"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";
import BuiCode from "@/app/components/BuiCode";
import {Icon} from "@iconify/react";

function ButtonWithIconAndLabelSection(props) {
    const codeBlock = `<BuiButton variant="text" startIcon={<Icon icon="mdi:send"/>}>Text Button</BuiButton>
<BuiButton startIcon={<Icon icon="mdi:check"/>}>Basic Button</BuiButton>
<BuiButton variant="outlined" endIcon={<Icon icon="mdi:trash"/>}>Outlined Button</BuiButton>
//
<BuiButton variant="text" startIcon={<Icon icon="mdi:send"/>}></BuiButton>
<BuiButton startIcon={<Icon icon="mdi:check"/>}></BuiButton>
<BuiButton variant="outlined" endIcon={<Icon icon="mdi:trash"/>}></BuiButton>
`;

    return (
        <BuiComponentShowcaseArea
            title="Button With Icon and Label"
            desc={<>Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon. You can also remove the labels and get only icon buttons.</>}
            codeBlock={codeBlock}
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                    <BuiButton variant="text" startIcon={<Icon icon="mdi:send"/>}>Text Button</BuiButton>
                    <BuiButton startIcon={<Icon icon="mdi:check"/>}>Basic Button</BuiButton>
                    <BuiButton variant="outlined" endIcon={<Icon icon="mdi:trash"/>}>Outlined Button</BuiButton>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                    <BuiButton variant="text" startIcon={<Icon icon="mdi:send"/>}></BuiButton>
                    <BuiButton startIcon={<Icon icon="mdi:check"/>}></BuiButton>
                    <BuiButton variant="outlined" endIcon={<Icon icon="mdi:trash"/>}></BuiButton>
                </div>
            </div>
        </BuiComponentShowcaseArea>
    )
}

export default ButtonWithIconAndLabelSection;