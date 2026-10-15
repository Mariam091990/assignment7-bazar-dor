


import Image from "next/image";
import Link from "next/link";

import NavLinks from "./NavLinks";



// const prices = [
//     {
//         emoji: "🍚",
//         name: "স্বর্ণালি চাল",
//         price: "৪৮",
//         change: "২.৫%",
//         up: true,
//     },
//     {
//         emoji: "🍚",
//         name: "মিনিকেট চাল",
//         price: "৬০",
//         change: "২.৯%",
//         up: true,
//     },
//     {
//         emoji: "🍚",
//         name: "বাসমতি চাল",
//         price: "৮০",
//         change: "৬.৬%",
//         up: true,
//     },
//     {
//         emoji: "🫘",
//         name: "মসুর ডাল",
//         price: "১৪২",
//         change: "২.৫%",
//         up: true,
//     },
//     {
//         emoji: "🥔",
//         name: "ছোলা",
//         price: "৯০",
//         change: "৭.৮%",
//         up: false,
//     },
//     {
//         emoji: "🌾",
//         name: "আলু",
//         price: "৪৫",
//         change: "৩.২%",
//         up: true,
//     },
// ];

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
                        <Image
                            src="/logo-icon.png"
                            alt="bazarDor"
                            width={32}
                            height={32}
                        />
                    </div>

                    <div>

                        <button className="btn ">  <h1 className="text-[16px] font-bold leading-none text-gray-800">
                            বাজার দর
                        </h1>
                        </button>


                        {/* <p className="mt-1  text-gray-500">
                            {date}
                        </p> */}
                    </div>
                </div>


                {/* Auth / Profile */}
                <div className="flex items-center gap-3">

                    {/* Logged out */}
                    <div className="hidden items-center gap-2 sm:flex">
                        <Link
                            href="/login">
                            <button
                                className="rounded-md px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-300 border-spacing-1.5"
                            >
                                সাইন ইন
                            </button>
                        </Link>

                        <Link
                            href="/signup">
                            <button
                                className="rounded-md bg-green-600 px-3 py-1.5 text-sm text-white hover:bg-green-700"
                            >
                                সাইন আপ
                            </button>   </Link>
                    </div>




                </div>
            </div>


            {/* ================= CATEGORY NAV ================= */}
            {/* <nav className="border-t border-gray-100">
                <div className="mx-auto flex max-w-[900px] items-center justify-center gap-5 overflow-x-auto px-4 py-2">

                    {categories.map((category) => {
                        const active = pathname === category.href;

                        return (
                            <Link
                                key={category.name}
                                href={category.href}
                                className={`
                  flex shrink-0 items-center gap-1.5
                  rounded-md px-2 py-1
                  text-xs transition
                  ${active
                                        ? "bg-green-100 font-semibold text-green-700"
                                        : "text-gray-700 hover:bg-gray-100"
                                    }
                `}
                            >
                                <span>{category.emoji}</span>
                                <span>{category.name}</span>
                            </Link>
                        );
                    })}

                </div>
            </nav> */}
                <NavLinks/>

            {/* ================= PRICE TICKER ================= */}
            {/* <div className="overflow-hidden border-t border-gray-200 bg-gray-50">

                <div className="ticker-track flex w-max"> */}

                    {/* Duplicate list for seamless infinite scrolling */}
                    {/* {[...prices, ...prices].map((item, index) => (
                        <div
                            key={index}
                            className="flex shrink-0 items-center gap-1.5 border-r border-gray-200 px-5 py-2 text-xs"
                        >
                            <span>{item.emoji}</span>

                            <span className="text-gray-700">
                                {item.name}
                            </span>

                            <span className="font-medium text-gray-800">
                                {item.price} টাকা/কেজি
                            </span>

                            <span
                                className={
                                    item.up
                                        ? "font-semibold text-red-500"
                                        : "font-semibold text-green-600"
                                }
                            >
                                {item.up ? "▲" : "▼"} {item.change}
                            </span>
                        </div>
                    ))}

                </div>
            </div> */}

        </header>
    );
}