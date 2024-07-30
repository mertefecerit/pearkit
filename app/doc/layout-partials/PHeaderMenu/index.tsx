import {Icon} from "@iconify/react";
import PSearch from "@/app/doc/layout-partials/PSearch";
import React, {useState} from "react";
import {PButton} from "@/app/components/src";
import PDarkModeToggle from "@/app/doc/layout-partials/PDarkModeToggle";

const PHeaderMenu:React.FC<{mobileSidebarToggle: () => void}> = ({mobileSidebarToggle}) => {
    const [searchModal, setSearchModal] = useState(false);
    return (
        <div className="flex gap-2 items-center">
            <PButton
                onClick={() => setSearchModal(true)}
                className="hidden lg:flex"
                variant="outlined"
                startIcon={<Icon icon="mdi:search"/>}
                label="Search"
            />
            <PButton
                onClick={() => setSearchModal(true)}
                className="flex lg:hidden"
                variant="outlined"
                startIcon={<Icon icon="mdi:search"/>}
            />
            <PButton
                href={"https://github.com/mertefecerit/pearkit"}
                variant="outlined"
                startIcon={<Icon icon="mdi:github"/>}
            />
            <PDarkModeToggle />
            <PButton
                className="flex lg:hidden"
                color="gray"
                onClick={mobileSidebarToggle}
                variant="outlined"
                startIcon={<Icon icon="mdi:menu"/>}
            />
            <PSearch
                status={searchModal}
                close={() => setSearchModal(false)}
            />
        </div>
    );
}

export default PHeaderMenu;