"use client"
import BuiComponentShowcaseArea from "@/app/components/project/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/BuiButton";
import BuiCode from "@/app/components/BuiCode";

function LoadingButtonSection(props) {
    const codeBlock = `<BuiButton isLoading={true}>Submit</BuiButton>`;

    return (
        <BuiComponentShowcaseArea
            anchor="loading"
            title="Loading"
            desc={<>You can send a boolean type value to the button components prop named <BuiCode>isLoading</BuiCode>.If prop is true, the button will be <BuiCode>disabled</BuiCode></>}
            codeBlock={codeBlock}
        >
            <BuiButton isLoading={true}>Button</BuiButton>
            <BuiButton isLoading={true} variant="outlined">Button</BuiButton>
            <BuiButton isLoading={true} variant="text">Button</BuiButton>
        </BuiComponentShowcaseArea>
    )
}

export default LoadingButtonSection;