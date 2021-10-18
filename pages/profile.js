import Image from "next/image";
import { useSession } from "next-auth/client";
import { EmojiHappyIcon, FireIcon } from "@heroicons/react/solid";

function Profile() {
    const [session] = useSession();
    return (
        <>
            {session ? (
                <div className="flex-grow h-screen md:mr-24
            overflow-y-auto scrollbar-hide md:ml-24 rounded-md border-1  border-gray-500 bg-white shadow-sm">
                    <div className="flex justify-center h-screen items-center m-2 p-10 ">
                        {session.user.image ? <Image
                            className="rounded-full cursor-pointer"
                            src={session.user.image}
                            width="50"
                            height="50"
                            layout="fixed"
                            alt="profile"
                        /> :
                            <EmojiHappyIcon className="h-36" />
                        }

                        <div className="m-5 ">
                            <h1 className="text-sm md:text-1xl xl:text-4xl flex items-center text-yellow-500 font-bold md:mb-2"> welcome to firebook<FireIcon className="h-10" /></h1>
                            <h2 className="text-lg text-red-400 font-bold"> {session.user.name}  </h2>
                            <p className="text-sm text-gray-500"> {session.user.email} </p>
                        </div>
                    </div>
                </div>)
                :
                <div>
                    <h1>please login first</h1>
                </div>
            }
        </>
    )
}

export default Profile;
