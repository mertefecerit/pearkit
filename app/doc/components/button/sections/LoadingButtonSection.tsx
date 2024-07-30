import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PButton, PTag} from "@/app/components/src";

function LoadingButtonSection() {
    const codeBlock = `<PButton isLoading={true} label="Submit"/>`;

    return (
        <PComponentShowcaseArea
            anchor="loading"
            title="Loading"
            desc={<>You can send a boolean type value to the button components prop named <PTag label="isLoading"/>. If prop is true, the button will be <PTag label="disabled"/></>}
            codeBlock={codeBlock}
        >
            <PButton isLoading={true} label={"Button"}/>
            <PButton isLoading={true} variant="outlined" label={"Button"}/>
            <PButton isLoading={true} variant="text" label={"Button"}/>
        </PComponentShowcaseArea>
    )
}

export default LoadingButtonSection;