import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiButton, BuiTag} from "@/app/components/src";

function LoadingButtonSection() {
    const codeBlock = `<BuiButton isLoading={true} label="Submit"/>`;

    return (
        <BuiComponentShowcaseArea
            anchor="loading"
            title="Loading"
            desc={<>You can send a boolean type value to the button components prop named <BuiTag label="isLoading"/>. If prop is true, the button will be <BuiTag label="disabled"/></>}
            codeBlock={codeBlock}
        >
            <BuiButton isLoading={true} label={"Button"}/>
            <BuiButton isLoading={true} variant="outlined" label={"Button"}/>
            <BuiButton isLoading={true} variant="text" label={"Button"}/>
        </BuiComponentShowcaseArea>
    )
}

export default LoadingButtonSection;