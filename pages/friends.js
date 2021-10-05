import { useState } from 'react';
import Image from "next/image";
import { CheckIcon, PlusCircleIcon } from "@heroicons/react/solid";

const friends = [
    {
        name: "Praneeth_AllurI",
        url: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        id: 1,
    },
    {
        name: "jeff bezos",
        url: "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjB3b3JrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        id: 2,
    },
    {
        name: "mukesh ambani",
        url: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        id: 3,
    },
    {
        name: "Elon musk",
        url: "https://images.unsplash.com/photo-1585011650347-c59dbef5a823?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxvbiUyMG11c2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        id: 4,
    },
    {
        name: "Mark Zuker Berg",
        url: "https://images.unsplash.com/photo-1545945774-73922eb27813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        id: 5,
    },
    {
        name: "Virat Kohli",
        url: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlyYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        id: 6,
    },
    {
        name: "Cristiano Ronaldo",
        url: "https://images.unsplash.com/photo-1522778034537-20a2486be803?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3Jpc3RpYW5vJTIwcm9uYWxkb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        id: 7,
    },
    {
        name: "Zara inc.",
        url: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        id: 8,
    },
    {
        name: "Banogi Girlfriend",
        url: "https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybGZyaWVuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        id: 9,
    },
    {
        name: "Dad's little Princess",
        url: "https://images.unsplash.com/photo-1524083615948-77168224375a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
        id: 10,
    },
]

function Friends() {
    const [addFriend, setaddFriend] = useState(false);
    return (
        <div className="flex-grow h-screen md:p-2 pb-44 md:mr-24
            overflow-y-auto scrollbar-hide md:ml-24">
            <div className="ml-2">
                <h1 className="font-bold text-lg">People you may know</h1>
            </div>
            {friends.map(friend => (

                <div className=" cursor-pointer inline-block justify-between items-center sm:flex rounded-md border-1 border-gray-500 bg-white shadow-sm
                p-5 my-5">
                    <Image src={friend.url}
                        className=""
                        width={380}
                        height={250}
                        layout="intrinsic"
                        alt={friend.name}
                    />
                    <div className="text-center ml-10">

                        <h1 className="text-yellow-500 font-medium mt-5">{friend.name}</h1>
                        <button
                            onClick={() => setaddFriend(!addFriend)}
                            className="rounded-full bg-yellow-400 font-medium p-2 px-5 mt-2 w-44 md:w-52">
                            <div className="flex items-center justify-around">
                                {addFriend ? <p className="text-xs md:text-base">Friend request sent</p> : <p className="text-xs md:text-base">Friend request</p>}

                                {addFriend ? <CheckIcon className="h-5 text-green-500" /> : <PlusCircleIcon className="h-5" />}
                            </div>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Friends;
