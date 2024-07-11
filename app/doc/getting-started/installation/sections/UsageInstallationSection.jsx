import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import {BuiCode} from "@/app/components/src";
import Link from "next/link";

function UsageInstallationSection(props) {
    const codeBlock = `//import css file to main css or scss file after tailwind @components directive
@import "@mertefecerit/bubbleui/dist/style.css";"

// Any Component
import {BuiButton} from "@mertefecerit/bubbleui";
    
<BuiButton color="sky">Button 1</BuiButton>`
    return (
        <BuiComponentShowcaseArea
            anchor="usage"
            title="Usage"
            desc={<>Tailwind was used for the designs of this component. Even though tailwindcss is compiled, it needs a <BuiCode>preflight</BuiCode> file. Tailwind was used for the designs of this component. Even though tailwindcss is compiled, it needs a preflight file. You can check out tailwind next or vite/react installation at this <Link href="https://tailwindcss.com/docs/installation/framework-guides" target="_target" className="text-blue-500 font-bold">address</Link>.</>}
            codeBlock={codeBlock}
        />
    );
}

export default UsageInstallationSection;