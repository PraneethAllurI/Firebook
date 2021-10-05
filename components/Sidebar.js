import { useSession } from "next-auth/client";
import SidebarRow from "./SidebarRow";
import {
    ChevronDownIcon,
    UserGroupIcon,
} from "@heroicons/react/outline"
import {
    DesktopComputerIcon,
    ShoppingBagIcon,
    UsersIcon,
} from "@heroicons/react/solid"


function Sidebar() {
    const [session] = useSession();
    return (
        <div className=" mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow src={session.user.image} title={session.user.name} />
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow Icon={ChevronDownIcon} title="See More" />

        </div>
    )
}

export default Sidebar
