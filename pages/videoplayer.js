import React from "react";
import ReactPlayer from "react-player"
import { useSession } from "next-auth/client";

const urls = [
    {
        url: "https://fb.watch/8hJrd5dn5k/"
    },
    {
        url: "https://fb.watch/8hJg-hxxhK/"
    },
    {
        url: "https://fb.watch/8hJq78qEMe/"
    },
    {
        url: "https://fb.watch/8hJsZd1sI8/"
    },
    {
        url: "https://fb.watch/8hJuoWTZdn/"
    },
]

function Videoplayer() {
    const [session] = useSession();
    return (
        <div className="flex-grow h-screen pb-10 pt-6 mr-4 
        xl:mr-40 overflow-y-auto scrollbar-hide md:ml-44">

            {urls.map(url => (
                <div className="ml-5 p-5 mt-5 rounded-md border-1 border-gray-500 bg-white shadow-sm">
                    {session ?
                        <h1 className="text-yellow-500 font-medium"> {session.user.name}</h1>
                        : <h1 className="text-yellow-500 font-medium">user (sign in to check the user) </h1>}
                    <p className="text-gray-500 mb-2">Suggested video for you (Random selection)</p>
                    <ReactPlayer
                        className=""
                        controls
                        url={url.url}
                        width="auto"
                        height="auto"
                    />
                </div>
            ))}

        </div>
    )
}

export default Videoplayer;
