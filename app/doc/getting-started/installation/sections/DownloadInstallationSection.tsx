import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function DownloadInstallationSection() {
    const codeBlock = `npm i pearkit`
    return (
        <BuiComponentShowcaseArea
            anchor="dowload"
            title="Download"
            desc={<>PearKIT is available for download at npm</>}
            codeBlock={codeBlock}
        />
    );
}

export default DownloadInstallationSection;