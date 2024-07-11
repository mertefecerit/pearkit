import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";


function ApiBadgeSection() {
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
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the badge.</>}
        >
            <BuiApiDescriptionTable content={content}/>
        </BuiComponentShowcaseArea>
    )
}

export default ApiBadgeSection;