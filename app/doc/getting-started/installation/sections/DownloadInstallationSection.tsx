import BuiComponentShowcaseArea from "@/app/doc/components/global/BuiComponentShowcaseArea";

function DownloadInstallationSection() {
    const codeBlock = `npm i @mertefecerit/bubbleui`
    return (
        <BuiComponentShowcaseArea
            anchor="dowload"
            title="Download"
            desc={<>BubbleUI is available for download at npm</>}
            codeBlock={codeBlock}
        />
    );
}

export default DownloadInstallationSection;