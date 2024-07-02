import ButtonSection from "@/app/doc/components/button/sections/ButtonSection";
import TextButtonSection from "@/app/doc/components/button/sections/TextButtonSection";
import OutlinedButtonSection from "@/app/doc/components/button/sections/OutlinedButtonSection";
import BasicButtonSection from "@/app/doc/components/button/sections/BasicButtonSection";
import ButtonHandlingClicks from "@/app/doc/components/button/sections/ButtonHandlingClicks";
import ButtonColorsSection from "@/app/doc/components/button/sections/ButtonColorsSection";

function ButtonComponentPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold">Button</h1>
                <p>Buttons allow users to take actions, and make choices, with a single tap.</p>
                <p>Buttons communicate actions that users can take. They are typically placed throughout your UI, in
                    places like:</p>
                <ul className="list-disc list-inside pl-4">
                    <li>Modal windows</li>
                    <li>Forms</li>
                    <li>Cards</li>
                    <li>Toolbars</li>
                </ul>
            </div>
            <ButtonSection/>
            <TextButtonSection/>
            <BasicButtonSection/>
            <OutlinedButtonSection />
            <ButtonHandlingClicks/>
            <ButtonColorsSection />
        </div>
    )
}

export default ButtonComponentPage;