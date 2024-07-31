import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";
import PApiDescriptionTable from "@/app/doc/components/global/PApiDescriptionTable";

function ApiAlertSection() {
    const content = [
        {
            name: 'type',
            type: 'AlertType | success | info | danger | warning',
            default:'info',
            description: 'Type of the component'
        },
        {
            name: 'status',
            type: 'boolean | true | false',
            default:'false',
            description: 'Status state of the component'
        },
        {
            name: 'message',
            type: 'string',
            default:'null',
            description: 'Message of the component'
        },
        {
            name: 'close',
            type: 'function',
            default:'void',
            description: 'Close function of the component'
        },
        {
            name: 'closable',
            type: 'boolean | true | false',
            default:'true',
            description: 'Closable status state of the component'
        },
        {
            name: 'lifetime',
            type: 'number',
            default: 'undefined',
            description: 'Lifetime property of the component'
        },
    ];
    return (
        <PComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the alert component.</>}
        >
            <PApiDescriptionTable content={content}/>
        </PComponentShowcaseArea>
    )
}

export default ApiAlertSection;