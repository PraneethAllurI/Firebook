import Link from "next/link";
import { useRouter } from "next/router";

function HeaderIcon({ Icon, active, url }) {
    const router = useRouter();
    return (
        <div className="flex items-center cursor-pointer 
        md:px-5  
        md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-yellow-500 group">
            <Link href={url}>
                <Icon
                    className={`h-5 text-gray-500 text-center sm:h-7
            mx-auto group-hover:text-yellow-500 ${router.route === { url }} ${active && 'text-yellow-500'} `} />
            </Link>
        </div>
    )
}

export default HeaderIcon;