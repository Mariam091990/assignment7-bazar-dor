


import Image from "next/image";
import Link from "next/link";

import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";




export default function Navbar() {

    // const date = new Date().toLocaleDateString("bn-bd",
    //     {
    //         dateStyle: "full",
    //     }
    // )

    return (
        <header className="w-full border-b border-gray-200 bg-white">

            {/* ================= TOP ROW ================= */}
            <div className="mx-auto flex h-15.5 max-w-225 items-center justify-between px-4 mt-2">

                <div className="flex items-center gap-2">
                    {/* Logo */}


                    <div className=" bg-green-600 text-white rounded-sm">
                        <Link href="/">
                        <Image
                            src="/logo-icon.png"
                            alt="bazarDor"
                            width={32}
                            height={32}
                        />
                        </Link>
                       
                    </div>

                    <div>

                        <Link href="/"> 
                        <button className="btn ">  <h1 className="text-[16px] font-bold leading-none text-gray-800">
                            বাজার দর
                        </h1>
                        </button>
                        </Link>


                        {/* <p className="mt-1  text-gray-500">
                            {date}
                        </p> */}
                    </div>
                </div>


 <UserInfo />
            </div>


            {/* ================= CATEGORY NAV ================= */}

            <NavLinks />



        </header>
    );
}