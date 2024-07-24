import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";
import BuiApiDescriptionTable from "@/app/doc/components/global/BuiApiDescriptionTable";
import {BuiTag} from "@/app/components/src";

function ApiDrawerSection() {
    const content = [
        {
            name: 'status',
            type: 'boolean',
            default:'false',
            description: 'State of drawer component'
        },
        {
            name: 'close',
            type: 'function',
            default:'null',
            description: 'Trigger click overlay area'
        },
        {
            name: 'children',
            type: 'node',
            default:'null',
            description: 'Child node(s) or component(s) for drawer component'
        },
        {
            name: 'className',
            type: 'string',
            default:'null',
            description: 'CSS Class for drawer component not drawer overlay'
        },
        {
            name: 'position',
            type: 'string',
            default:'left',
            description: <>Position of drawer component. Also take <BuiTag label={"right"}/> <BuiTag label={"bottom"}/> <BuiTag label={"top"}/></>
        },
    ];
    return (
        <BuiComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the drawer component.</>}
        >
            <BuiApiDescriptionTable content={content}/>
        </BuiComponentShowcaseArea>
    )
}

export default ApiDrawerSection;