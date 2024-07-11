import DownloadInstallationSection from "@/app/doc/getting-started/installation/sections/DownloadInstallationSection";
import UsageInstallationSection from "@/app/doc/getting-started/installation/sections/UsageInstallationSection";

export const metadata = {
    title: 'Installation | BubbleUI',
    description : 'BubbleUI is a rich set of open source UI components for React.'
}
function InstallationPage(props) {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Installation</h1>
                <p>BubbleUI is a rich set of open source UI components for React.</p>
            </div>
            <DownloadInstallationSection/>
            <UsageInstallationSection />
        </div>
    )
}

export default InstallationPage;