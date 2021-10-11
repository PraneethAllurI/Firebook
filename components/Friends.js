import { useState } from 'react';
import Image from "next/image";
import { CheckIcon, PlusCircleIcon } from "@heroicons/react/solid";


function Friends({ friend }) {
    const [addFriend, setaddFriend] = useState(false);


    return (
        <>

            <div className=" cursor-pointer inline-block justify-between items-center sm:flex rounded-md border-1 
            border-gray-500 bg-white shadow-sm
                p-5 my-5">
                <Image
                    src={friend.url}
                    alt={friend.name}
                    className=""
                    width={380}
                    height={250}
                    layout="intrinsic"
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
        </>
    )
}

export default Friends;
