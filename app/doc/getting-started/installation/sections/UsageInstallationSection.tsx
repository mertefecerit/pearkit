import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import {PTag} from "@/app/components/src";
import Link from "next/link";

function UsageInstallationSection() {
    const codeBlock = `// import css file to main css or scss file
@import "pearkit/dist/style.css";

// import any component in your components
import {PButton} from "pearkit";
    
// and you can use it like this.   
<PButton color="green" label="Button 1" />`
    return (
        <PComponentShowcaseArea
            anchor="usage"
            title="Usage"
            desc={<>Tailwind was used for the designs of this component. Even though tailwindcss is compiled, it needs a <PTag label="preflight"/> file. You can check out tailwind next or vite/react installation at this <Link href="https://tailwindcss.com/docs/installation/framework-guides" target="_target" className="text-lime-500 font-bold">address</Link>.</>}
            codeBlock={codeBlock}
        />
    );
}

export default UsageInstallationSection;