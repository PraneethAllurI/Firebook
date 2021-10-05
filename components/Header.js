import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
    BellIcon,
    HomeIcon,
    SearchIcon,
    ShoppingCartIcon,
    UserGroupIcon,
} from "@heroicons/react/solid";

import {
    PlayIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/client";

function Header() {
    const [session] = useSession();
    const router = useRouter();
    return (

        <div className="sticky top-0 z-50 bg-white flex
        items-center p-2 lg:px-5 shadow-md">

            {/* left */}
            <div className="flex items-center md:ml-5">
                {/* <Image src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout="fixed" /> */}
                <h1 className="font-bold text-yellow-500 text-5xl mr-2">f</h1>
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="hidden md:inline-flex h-6  text-gray-600" />
                    <input className="outline-none hidden md:inline-flex ml-2 items-center bg-transparent placeholder-gray-500 flex-shrink"
                        type="text" placeholder="search firebook" />
                </div>
            </div>

            {/* center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2" >

                    <HeaderIcon active url="/" Icon={HomeIcon} />
                    <HeaderIcon url="/videoplayer" Icon={PlayIcon} />
                    <HeaderIcon url="/marketplace" Icon={ShoppingCartIcon} />
                    <HeaderIcon url="/groups" Icon={UserGroupIcon} />
                </div>
            </div>


            {/* right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* profile pic */}

                <div
                    className="flex justify-between items-center cursor-pointer">

                    <Image
                        className="rounded-full"
                        src={session.user.image}
                        width="40"
                        height="40"
                        layout="fixed"
                    />
                    <p className="hidden md:inline-flex whitespace-nowrap font-semibold pr-3 ml-2"> {session.user.name} </p>
                </div>
                <p
                    onClick={signOut}
                    className="cursor-pointer text-xs font-medium p-2 rounded-full bg-gray-200 ml-2">Log out</p>
                <BellIcon className="icon" />
            </div>

        </div>
    )
}

export default Header;
