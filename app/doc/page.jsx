import {redirect} from "next/navigation";

function DocPage() {
    redirect('/doc/getting-started/installation')
    return null;
}

export default DocPage;