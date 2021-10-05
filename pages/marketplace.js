import { LocationMarkerIcon } from "@heroicons/react/solid";
import Image from "next/image";


const images = [
    {
        src: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        price: "1,12,299",
        desc: "Apple iPhone 12",
    },
    {
        src: "https://images.unsplash.com/photo-1494578379344-d6c710782a3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        price: 1299,
        desc: "Dress For Women",
    },
    {
        src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        price: "44,459",
        desc: "Top model Car",
    },
    {
        src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        price: 749,
        desc: "Dogs for Sale",
    },
    {
        src: "https://images.unsplash.com/photo-1554967665-10343ae87a13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        price: 2999,
        desc: "Jeans Combo",
    },
    {
        src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        price: 1119,
        desc: "Apple HeadPhones",
    },
    {
        src: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        price: "22,999",
        desc: "Excellent Bike for sale",
    },
    {
        src: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        price: 3559,
        desc: "Cycle-faster than Bike",
    },
    {
        src: "https://images.unsplash.com/photo-1593766788306-28561086694e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNyaWNrZXQlMjBzcG9ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        price: 2499,
        desc: "Cricket kit combo",
    },
    {
        src: "https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHdhdGNofGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        price: "2,11,199",
        desc: "Costlier than Rolex",

    },
]

function MarketPlace() {
    return (
        <div className="flex-grow h-screen p-2 md:mr-24
            overflow-y-auto scrollbar-hide md:ml-24">
            <div className="flex items-center justify-between mt-5">

                <h1 className="font-medium text-2xl">Today's picks</h1>
                <p className="flex items-center text-gray-500 mr-5">
                    <LocationMarkerIcon className="h-5" />Near you</p>
            </div>
            {images.map(image => (
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
            ))}

        </div>
    )
}

export default MarketPlace;