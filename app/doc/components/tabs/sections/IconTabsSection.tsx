import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTab, PTabs, PTag} from "@/app/components/src";
import {Icon} from "@iconify/react";

function IconTabsSection() {
    const codeBlock = `<PTabs>
    <PTab label="Register Form" icon={<Icon icon="mdi:user-plus"/>}>
        <p>Register Form</p>
    </PTab>
    <PTab label="Login Form" icon={<Icon icon="mdi:login"/>}>
        <p>Login Form</p>
    </PTab>
</PTabs>`
    return (
        <PComponentShowcaseArea
            anchor="icon"
            title="Icon"
            desc={<>You can add a icon by passing an icon component to the <PTag label="icon"/> property.</>}
            codeBlock={codeBlock}
        >
            <PTabs>
                <PTab label="Register Form" icon={<Icon icon="mdi:user-plus"/>}>
                    <p>Register Form</p>
                </PTab>
                <PTab label="Login Form" icon={<Icon icon="mdi:login"/>}>
                    <p>Login Form</p>
                </PTab>
            </PTabs>
        </PComponentShowcaseArea>
    );
}

export default IconTabsSection;