import {Icon} from "@iconify/react";
import BuiButton from "@/app/components/src/BuiButton";
import BuiSearch from "@/app/doc/layout-partials/BuiSearch";
import {useState} from "react";
import BuiDarkModeToggle from "@/app/doc/layout-partials/BuiDarkModeToggle";

function BuiHeaderMenu({mobileSidebarToggle}) {
    const [searchModal, setSearchModal] = useState(false);
    return (
        <div className="flex gap-2 items-center">
            <BuiButton onClick={() => setSearchModal(true)} className="hidden lg:flex" variant="outlined" startIcon={<Icon icon="mdi:search"/>}>
                Search
            </BuiButton>
            <BuiButton onClick={() => setSearchModal(true)} className="flex lg:hidden" variant="outlined" startIcon={<Icon icon="mdi:search"/>}></BuiButton>
            <BuiButton href="https://github.com/mertefecerit/bubbleui" variant="outlined" startIcon={<Icon icon="mdi:github"/>}></BuiButton>
            <BuiDarkModeToggle />
            <BuiButton className="flex lg:hidden" color="gray" onClick={mobileSidebarToggle} variant="outlined" startIcon={<Icon icon="mdi:menu"/>}></BuiButton>
            <BuiSearch status={searchModal} close={() => setSearchModal(false)}></BuiSearch>
        </div>
    );
}

export default BuiHeaderMenu;