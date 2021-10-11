
import Image from "next/image";


function MarketPlace({ image }) {
    return (

        <>
            <div className="cursor-pointer block m-2 rounded-md border-1 border-gray-500 bg-white shadow-sm
                p-5 my-5">
                <Image src={image.src}
                    className="w-10 h-10"
                    width={300}
                    height={200}
                    layout="responsive"
                    alt={image.desc}
                />
                <h1 className="text-yellow-500 font-medium mt-5">₹{image.price}/-</h1>
                <p className="text-gray-500">{image.desc} </p>
            </div>
        </>
    )
}

export default MarketPlace;
