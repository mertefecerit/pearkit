import BButton from "@/app/components/BButton";
import {Icon} from "@iconify/react";

function ButtonComponentPage() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-2">Button</h1>
            <p className="mb-2">Buttons allow users to take actions, and make choices, with a single tap.</p>
            <p className="mb-2">Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:
                <ul className="list-disc list-inside pl-4">
                    <li>Modal windows</li>
                    <li>Forms</li>
                    <li>Cards</li>
                    <li>Toolbars</li>
                </ul>
            </p>
            <div className="flex gap-4">
                <BButton variant="text" startIcon={<Icon icon="mdi:content-save"/>}>
                    <span>Buton</span>
                </BButton>
                <BButton>
                    <span>Buton</span>
                </BButton>
                <BButton variant="outlined" endIcon={<Icon icon="mdi:content-save"/>}>
                    <span>Buton</span>
                </BButton>
            </div>
        </div>
    )
}

export default ButtonComponentPage;