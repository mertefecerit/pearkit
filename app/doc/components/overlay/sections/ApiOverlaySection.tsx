import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";
import {TwColor} from "@/app/components/src/types/TwColor";

function ApiOverlaySection() {
    const content = [
        {
            name: 'status',
            type: 'boolean | true | false',
            default:'false',
            description: 'Status state of the component'
        },
        {
            name: 'closable',
            type: 'boolean | true | false',
            default:'true',
            description: 'Closable state of the component'
        },
        {
            name: 'close',
            type: 'function',
            default:'void',
            description: 'Close method of the component'
        },
        {
            name: 'color',
            type: 'TwColor | black | white',
            default:'black',
            description: 'Colors of the component'
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