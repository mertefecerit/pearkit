import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiButton from "@/app/components/src/BuiButton";
import BuiTag from "@/app/components/src/BuiTag";

function LoadingButtonSection(props) {
    const codeBlock = `<BuiButton isLoading={true}>Submit</BuiButton>`;

    return (
        <BuiComponentShowcaseArea
            anchor="loading"
            title="Loading"
            desc={<>You can send a boolean type value to the button components prop named <BuiTag label="isLoading"/>. If prop is true, the button will be <BuiTag label="disabled"/></>}
            codeBlock={codeBlock}
        >
            <BuiButton isLoading={true}>Button</BuiButton>
            <BuiButton isLoading={true} variant="outlined">Button</BuiButton>
            <BuiButton isLoading={true} variant="text">Button</BuiButton>
        </BuiComponentShowcaseArea>
    )
}

export default LoadingButtonSection;