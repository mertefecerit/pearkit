import {Icon} from "@iconify/react";
import BuiButton from "@/app/components/src/BuiButton";

function BuiHeaderMenu({mobileSidebarToggle}) {
    return (
        <div className="flex gap-2 items-center">
            <BuiButton classes="!hidden lg:!flex" variant="outlined" startIcon={<Icon icon="mdi:search"/>}>
                Search
            </BuiButton>
            <BuiButton classes="!flex lg:!hidden" variant="outlined" startIcon={<Icon icon="mdi:search"/>}></BuiButton>
            <BuiButton variant="outlined" startIcon={<Icon icon="mdi:github"/>}></BuiButton>
            <BuiButton variant="outlined" startIcon={<Icon icon="mdi:cog"/>}></BuiButton>
            <BuiButton classes="!flex lg:!hidden" color="gray" onClick={mobileSidebarToggle} variant="outlined" startIcon={<Icon icon="mdi:menu"/>}></BuiButton>
        </div>
    );
}

export default BuiHeaderMenu;