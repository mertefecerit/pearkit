import DownloadInstallationSection from "@/app/doc/getting-started/installation/sections/DownloadInstallationSection";
import UsageInstallationSection from "@/app/doc/getting-started/installation/sections/UsageInstallationSection";

export const metadata = {
    title: 'Installation | PearKIT',
    description : 'PearKIT is a rich set of open source UI components for React.'
}
function InstallationPage() {
    return (
        <>
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Installation</h1>
                <p>PearKIT is a rich set of open source UI components for React.</p>
            </div>
            <DownloadInstallationSection/>
            <UsageInstallationSection/>
        </>
    )
}

export default InstallationPage;