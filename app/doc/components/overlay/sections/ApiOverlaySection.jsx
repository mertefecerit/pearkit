import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";

function ApiOverlaySection() {
    const content = [
        {
            name: 'color',
            type: 'string',
            default:'black',
            description: 'Color of overlay component.'
        },
        {
            name: 'status',
            type: 'boolean',
            default:'false',
            description: 'State of overlay component'
        },
        {
            name: 'close',
            type: 'function',
            default:'null',
            description: 'Close method of overlay component.'
        },
        {
            name: 'closable',
            type: 'boolean',
            default:'false',
            description: 'Closable control state of overlay component'
        },
    ];
    return (
        <BuiComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the overlay component.</>}
        >
            <BuiApiDescriptionTable content={content}/>
        </BuiComponentShowcaseArea>
    )
}

export default ApiOverlaySection;