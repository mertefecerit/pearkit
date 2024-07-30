"use client"

import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PInput from "@/app/components/src/PInput";
import {PTag} from "@/app/components/src";

function PasswordRevealInputSection() {
    const codeBlock = `<PInput type="password" passwordReveal={false} />`
    return (
        <PComponentShowcaseArea
            anchor="passwordReveal"
            title="Password Reveal"
            desc={<>If your input component type is <PTag label={"password"}/> we give you a show/hide password icon. Also, you do not have to show this icon all the time. You can use the <PTag label={"passwordReveal"}/> property to manage this situation.</>}
            codeBlock={codeBlock}
        >
            <div className="md:w-[300px] w-full flex gap-4 flex-col">
                <PInput type="password" placeholder="********" onChange={() => null}/>
                <PInput type="password" variant="underlined" placeholder="********" onChange={() => null}/>
                <PInput type="password" variant="filled" placeholder="********" onChange={() => null}/>
            </div>
        </PComponentShowcaseArea>
    );
}

export default PasswordRevealInputSection;