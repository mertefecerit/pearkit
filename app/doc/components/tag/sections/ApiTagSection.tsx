import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PApiDescriptionTable from "@/app/doc/components/global/PApiDescriptionTable";

function ApiTagSection() {
    const content = [
        {
            name: 'label',
            type: 'string',
            default:'null',
            description: 'Label of the component'
        },
        {
            name: 'color',
            type: 'TwColor',
            default:'blue',
            description: 'Colors of the component'
        },
        {
            name: 'rounded',
            type: 'boolean',
            default:'true',
            description: 'Fully rounded design of the component'
        },
        {
            name: 'icon',
            type: 'ReactNode',
            default:'null',
            description: 'Icon component of the tag component'
        },
    ];
    return (
        <PComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the tag component.</>}
        >
            <PApiDescriptionTable content={content}/>
        </PComponentShowcaseArea>
    )
}

export default ApiTagSection;