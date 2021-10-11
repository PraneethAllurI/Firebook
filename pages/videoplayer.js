import VideoPlay from '../components/VideoPlay'

const urls = [
    {
        url: "https://fb.watch/8hJrd5dn5k/",
        id: 1,
    },
    {
        url: "https://fb.watch/8hJg-hxxhK/",
        id: 2,
    },
    {
        url: "https://fb.watch/8hJq78qEMe/",
        id: 3,
    },
    {
        url: "https://fb.watch/8hJsZd1sI8/",
        id: 4,
    },
    {
        url: "https://fb.watch/8hJuoWTZdn/",
        id: 5,
    },
]

function videoplayer() {
    const videolist = urls.map(url => (<VideoPlay key={url.id} url={url} />))
    return (
        <div className="flex-grow h-screen pt-6 pb-44 mr-4 
        xl:mr-40 overflow-y-auto scrollbar-hide md:ml-44">
            {videolist}
        </div>
    )
}

export default videoplayer

