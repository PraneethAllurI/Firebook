import React from "react";
import ReactPlayer from "react-player"
import { useSession } from "next-auth/client";



function Videoplayer({ url }) {
    const [session] = useSession();
    return (
        <>
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
        </>
    )
}

export default Videoplayer;
