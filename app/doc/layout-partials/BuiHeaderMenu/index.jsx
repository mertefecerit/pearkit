import {Icon} from "@iconify/react";
import BuiButton from "@/app/components/src/BuiButton";

function BuiHeaderMenu({mobileSidebarToggle}) {
    return (
        <div className="flex gap-2 items-center">
            <BuiButton className="hidden lg:flex" variant="outlined" startIcon={<Icon icon="mdi:search"/>}>
                Search
            </BuiButton>
            <BuiButton className="flex lg:hidden" variant="outlined" startIcon={<Icon icon="mdi:search"/>}></BuiButton>
            <BuiButton href="https://github.com/mertefecerit/bubbleui" variant="outlined" startIcon={<Icon icon="mdi:github"/>}></BuiButton>
            <BuiButton variant="outlined" startIcon={<Icon icon="mdi:cog"/>}></BuiButton>
            <BuiButton className="flex lg:hidden" color="gray" onClick={mobileSidebarToggle} variant="outlined" startIcon={<Icon icon="mdi:menu"/>}></BuiButton>
        </div>
    );
}

export default BuiHeaderMenu;