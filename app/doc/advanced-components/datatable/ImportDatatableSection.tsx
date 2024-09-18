import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function ImportDatatableSection() {
    const codeBlock = `import { PDatatable } from 'pearkit';`
    return (
        <PComponentShowcaseArea
            anchor="import"
            title="Datatable"
            desc={<>Datatable for work on dataflows</>}
            codeBlock={codeBlock}
        />
    );
}

export default ImportDatatableSection;