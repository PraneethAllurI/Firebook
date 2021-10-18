
import { signIn } from "next-auth/client";

function Login() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="font-bold text-yellow-500 text-3xl">Welcome to Firebook</h1>
                <p className="text-sm md:text-base mt-5">Note:-<span className="text-green-500">App uses facebook and google authentication</span></p>
                <p className=" text-sm md:text-lg text-yellow-500">NAME,EMAIL and DISPLAY PICTURE will be fetched</p>
                <p>Credentials are not fetched nor saved</p>
                <p>Thank you,let<span>&apos;</span>s get started</p>
                <h1 onClick={signIn}
                    className="p-2 mt-5 bg-yellow-500 rounded-full text-white
                 cursor-pointer">Click here to Login</h1>
            </div>
        </div>
    )
}

export default Login
