import BasicButtonGroupSection from "@/app/doc/components/button-group/sections/BasicButtonGroupSection";
import ButtonGroupVariantSection from "@/app/doc/components/button-group/sections/ButtonGroupVariantSection";

export const metadata = {
    title: 'Button Group',
    description : 'The ButtonGroup component can be used to group related buttons.'
}
function ButtonGroupPage(props) {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold">Button Group</h1>
                <p>The ButtonGroup component can be used to group related buttons.</p>
            </div>
            <BasicButtonGroupSection/>
            <ButtonGroupVariantSection />
        </div>
    )
}

export default ButtonGroupPage;