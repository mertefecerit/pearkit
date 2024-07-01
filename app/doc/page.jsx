import {redirect} from "next/navigation";

function DocPage() {
    redirect('/doc/getting-started/overview')
    return null;
}

export default DocPage;