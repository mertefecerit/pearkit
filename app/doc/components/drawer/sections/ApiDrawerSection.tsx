import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PApiDescriptionTable from "@/app/doc/components/global/PApiDescriptionTable";

function ApiDrawerSection() {
    const content = [
        {
            name: 'status',
            type: 'boolean | true | false',
            default:'false',
            description: 'State of drawer component'
        },
        {
            name: 'close',
            type: 'function',
            default:'void',
            description: 'Trigger click overlay area'
        },
        {
            name: 'children',
            type: 'ReactNode',
            default:'null',
            description: 'Child node(s) or component(s) for drawer component'
        },
        {
            name: 'position',
            type: 'string | left | right | bottom | top',
            default:'left',
            description: 'Position of drawer component.'
        },
    ];
    return (
        <PComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the drawer component.</>}
        >
            <PApiDescriptionTable content={content}/>
        </PComponentShowcaseArea>
    )
}

export default ApiDrawerSection;