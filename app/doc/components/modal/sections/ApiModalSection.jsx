import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";

function ApiModalSection() {
    const content = [
        {
            name: 'modalHeader',
            type: 'elementType',
            default: 'null',
            description: 'If you want set your header component, use this.',
        },
        {
            name: 'status',
            type: 'boolean',
            default: 'false',
            description: 'Control Modal & Overlay status state',
        },
        {
            name: 'children',
            type: 'node',
            default: 'null',
            description: 'Modal body',
        },
        {
            name: 'close',
            type: 'function',
            default: 'null',
            description: 'Control close method on Modal & Overlay',
        },
        {
            name: 'overlayClassName',
            type: 'string',
            default: 'p-8 justify-center',
            description: 'If you want set your overlay class, use this.',
        },
        {
            name: 'className',
            type: 'string',
            default: 'null',
            description: 'If you want set your modal class, use this',
        },
        {
            name: 'outsideClick',
            type: 'boolean',
            default: 'true',
            description: 'Modal & Overlay outside click control state prop',
        },
        {
            name: 'size',
            type: 'string',
            default: 'default',
            description: 'Change modal size prop',
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