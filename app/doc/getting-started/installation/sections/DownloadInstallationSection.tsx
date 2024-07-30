import PComponentShowcaseArea from "@/app/doc/components/global/PComponentShowcaseArea";

function DownloadInstallationSection() {
    const codeBlock = `npm i pearkit`
    return (
        <PComponentShowcaseArea
            anchor="dowload"
            title="Download"
            desc={<>PearKIT is available for download at npm</>}
            codeBlock={codeBlock}
        />
    );
}

export default DownloadInstallationSection;