import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiTab, BuiTabs, BuiTag} from "@/app/components/src";
import {Icon} from "@iconify/react";

function IconTabsSection() {
    const codeBlock = `<BuiTabs>
    <BuiTab label="Register Form" icon={<Icon icon="mdi:user-plus"/>}>
        <p>Register Form</p>
    </BuiTab>
    <BuiTab label="Login Form" icon={<Icon icon="mdi:login"/>}>
        <p>Login Form</p>
    </BuiTab>
</BuiTabs>`
    return (
        <BuiComponentShowcaseArea
            anchor="icon"
            title="Icon"
            desc={<>You can add a icon by passing an icon component to the <BuiTag label="icon"/> property.</>}
            codeBlock={codeBlock}
        >
            <BuiTabs>
                <BuiTab label="Register Form" icon={<Icon icon="mdi:user-plus"/>}>
                    <p>Register Form</p>
                </BuiTab>
                <BuiTab label="Login Form" icon={<Icon icon="mdi:login"/>}>
                    <p>Login Form</p>
                </BuiTab>
            </BuiTabs>
        </BuiComponentShowcaseArea>
    );
}

export default IconTabsSection;