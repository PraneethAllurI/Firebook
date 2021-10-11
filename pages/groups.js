import { CheckCircleIcon, PlusIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from 'react';

const groups = [
    {
        url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW50cmVwcmVuZXVyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        title: "Entrepreneurs Guide",
        friends: 20,
    },
    {
        url: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxvbiUyMG11c2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        title: "Tesla-the future",
        friends: 1992,
    },
    {
        url: "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjcnVpdG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        title: "Job Recruitment",
        friends: 57,
    },
    {
        url: "https://images.unsplash.com/photo-1494883759339-0b042055a4ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eW91dGglMjB1bmVtcGxveW1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        title: "VIP group for Jobless",
        friends: 13,
    },
    {
        url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        title: "Entrepreneurs Guide",
        friends: 23,
    },
]

function Groups() {
    const [joinGroup, setjoinGroup] = useState(false);
    return (
        <div className="flex-grow h-screen p-2 md:mr-24
            overflow-y-auto scrollbar-hide md:ml-24">
            <div className="ml-2">
                <h1 className="font-bold text-lg">Friends groups</h1>
                <p className="text-gray-500 text-sm">Group suggestions</p>
            </div>
            {groups.map(group => (
                <div className=" block m-2 rounded-md border-1 border-gray-500 bg-white shadow-sm
                p-5 my-5">
                    <Image src={group.url}
                        className="w-10 h-10"
                        width={300}
                        height={200}
                        layout="responsive"
                        alt={group.title}
                    />
                    <div className="text-center">

                        <h1 className="text-yellow-500 font-medium mt-5">{group.title}</h1>
                        <p className="text-gray-500 text-sm">{`${group.friends} members in group`} </p>
                        <button
                            onClick={() => setjoinGroup(!joinGroup)}
                            className="rounded-full bg-yellow-400 font-medium p-2 px-5 mt-2 w-72">
                            <div className="flex items-center justify-around">
                                {joinGroup ? "Joined Group" : "Join Group"}
                                {joinGroup ? <CheckCircleIcon className="h-5" /> : <PlusIcon className="h-5" />}
                            </div>
                        </button>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Groups;
