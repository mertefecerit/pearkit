import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";

function ApiModalSection() {
    const content = [
        {
            name: 'modalHeader',
            type: 'ReactNode',
            default: 'null',
            description: 'Override header of the component.',
        },
        {
            name: 'status',
            type: 'boolean',
            default: 'false',
            description: 'Status state of the component',
        },
        {
            name: 'closable',
            type: 'boolean',
            default: 'false',
            description: 'Closable state of the component',
        },
        {
            name: 'modalTitle',
            type: 'string',
            default: 'null',
            description: 'Modal Title of the component',
        },
        {
            name: 'overlayColor',
            type: 'TwColor | Tailwind color names union + \'white\' and \'black\' name support',
            default: 'black',
            description: 'Change overlay colors of the component',
        },
        {
            name: 'size',
            type: 'string | small | default | large | full',
            default: 'default',
            description: 'Size of the component',
        },
        {
            name: 'close',
            type: 'function',
            default: 'void',
            description: 'Close method of the component',
        },
    ];
    return (
        <BuiComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the modal component.</>}
        >
            <BuiApiDescriptionTable content={content}/>
        </BuiComponentShowcaseArea>
    )
}

export default ApiModalSection;