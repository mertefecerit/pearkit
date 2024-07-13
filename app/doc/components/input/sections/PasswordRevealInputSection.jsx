"use client"

import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiInput from "@/app/components/src/BuiInput";
import {BuiCode} from "@/app/components/src";

function PasswordRevealInputSection() {
    const codeBlock = `<BuiInput type="password" passwordReveal={false} />`
    return (
        <BuiComponentShowcaseArea
            anchor="passwordReveal"
            title="Password Reveal"
            desc={<>If your input component type is <BuiCode>password</BuiCode> we give you a show/hide password icon. Also, you do not have to show this icon all the time. You can use the <BuiCode>passwordReveal</BuiCode> property to manage this situation.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <BuiInput type="password" placeholder="********" onChange={() => null}/>
                <BuiInput type="password" variant="underlined" placeholder="********" onChange={() => null}/>
                <BuiInput type="password" variant="filled" placeholder="********" onChange={() => null}/>
            </div>
        </BuiComponentShowcaseArea>
    );
}

export default PasswordRevealInputSection;