import BButton from "@/app/components/BButton";
import BComponentShowcaseArea from "@/app/components/BComponentShowcaseArea";

function ButtonComponentPage() {
    const buttonCodeBlock = `<BButton variant="text">Text Button</BButton>
<BButton>Basic Button</BButton>
<BButton variant="outlined">Outlined Button</BButton>`;

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Button</h1>
            <p>Buttons allow users to take actions, and make choices, with a single tap.</p>
            <p>Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:</p>
            <ul className="list-disc list-inside pl-4">
                <li>Modal windows</li>
                <li>Forms</li>
                <li>Cards</li>
                <li>Toolbars</li>
            </ul>
            <hr/>
            <BComponentShowcaseArea
                title="Button"
                desc={<>The <code className="bg-gray-100 px-1 py-0.5 text-sm rounded border">Button</code> comes with three variants: text (default), basic, and outlined.</>}
                codeBlock={buttonCodeBlock}
            >
                <div className="flex gap-4">
                    <BButton variant="text">Text Button</BButton>
                    <BButton>Basic Button</BButton>
                    <BButton variant="outlined">Outlined Button</BButton>
                </div>
            </BComponentShowcaseArea>
        </div>
    )
}

export default ButtonComponentPage;