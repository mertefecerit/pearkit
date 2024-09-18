import ImportDatatableSection from "@/app/doc/advanced-components/datatable/ImportDatatableSection";
import AccessibilityDatatableSection from "@/app/doc/advanced-components/datatable/AccessibilityDatatableSection";
import ApiDatatableSection from "@/app/doc/advanced-components/datatable/ApiDatatableSection";
import BasicDatatableSection from "@/app/doc/advanced-components/datatable/BasicDatatableSection";


const DatatablePage = () => {

    return (
        <>
            <ImportDatatableSection/>
            <BasicDatatableSection />
            <AccessibilityDatatableSection/>
            <ApiDatatableSection />
        </>
    );
};

export default DatatablePage;