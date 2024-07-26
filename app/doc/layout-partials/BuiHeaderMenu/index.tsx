import {Icon} from "@iconify/react";
import BuiButton from "@/app/components/src/BuiButton";
import BuiSearch from "@/app/doc/layout-partials/BuiSearch";
import React, {useState} from "react";
import BuiDarkModeToggle from "@/app/doc/layout-partials/BuiDarkModeToggle";

const BuiHeaderMenu:React.FC<{mobileSidebarToggle: () => void}> = ({mobileSidebarToggle}) => {
    const [searchModal, setSearchModal] = useState(false);
    return (
        <div className="flex gap-2 items-center">
            <BuiButton
                onClick={() => setSearchModal(true)}
                className="hidden lg:flex"
                variant="outlined"
                startIcon={<Icon icon="mdi:search"/>}
                label="Search"
            />
            <BuiButton
                onClick={() => setSearchModal(true)}
                className="flex lg:hidden"
                variant="outlined"
                startIcon={<Icon icon="mdi:search"/>}
            />
            <BuiDarkModeToggle />
            <BuiButton
                className="flex lg:hidden"
                color="gray"
                onClick={mobileSidebarToggle}
                variant="outlined"
                startIcon={<Icon icon="mdi:menu"/>}
            />
            <BuiSearch
                status={searchModal}
                close={() => setSearchModal(false)}
            />
        </div>
    );
}

export default BuiHeaderMenu;