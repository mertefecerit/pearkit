import BuiComponentShowcaseArea from "@/app/components/project/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/components/project/BuiApiDescriptionTable";
import BuiCode from "@/app/components/BuiCode";

function AccessibilityBadgeSection() {
    const content = [
        {
            name: 'value',
            type: 'string',
            default:'null',
            description: 'It is the value in the component.'
        },
        {
            name: 'size',
            type: 'string',
            default:'xs',
            description: 'xs, sm and base are available for 3 different sizes.'
        },
        {
            name: 'color',
            type: 'string',
            default:'red',
            description: 'With this prop you can use all the names in the tailwindcss default color palette.'
        },
        {
            name: 'positions',
            type: 'object',
            default:'null',
            description: 'It takes the value as an object and passes it into the style as a prop in a distributed manner.'
        }
    ];
    return (
        <BuiComponentShowcaseArea
            anchor="accessibility"
            title="Accessibility"
            desc={<>Badge does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required.</>}
        >
            <BuiApiDescriptionTable content={content}/>
        </BuiComponentShowcaseArea>
    )
}

export default AccessibilityBadgeSection;