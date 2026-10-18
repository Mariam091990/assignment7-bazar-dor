"use client";
import Link from "next/link";
import { authClient } from "../../lib/auth-client";
import Image from "next/image";


const UserInfo = () => {

    const { data: session } = authClient.useSession();
    //  console.log(session);
    const user = session?.user;
    console.log(user);

    const handleSignOut = async () => {
        await authClient.signOut();
    };


    return (
        <div>


            {
                user ? <div className=" flex items-center gap-2">

                    <div className="tooltip tooltip-open tooltip-left " data-tip={user?.name} >
                        <Link href="/profile">
                        <div className="avatar">
                            <div className="mask mask-heart w-24">
                                <Image alt="Tailwind-CSS-Avatar-component"
                                    src={user?.image as string}
                                    height={24}
                                    width={24}
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                        </Link>
                    </div>


                    <button onClick={handleSignOut}
                        className="rounded-md bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700"
                    >
                        সাইন আউট
                    </button>



                </div>

                    :

                    <div className=" flex items-center gap-2">

                        <Link
                            href="/signin">
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
                            </button>
                        </Link>
                    </div>
            }







        </div>

    );
};

export default UserInfo;



{/* <div className="tooltip" data-tip="hello">
  <button className="btn">Hover me</button>
</div>


<div className="tooltip">
  <div className="tooltip-content">
    <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Wow!</div>
  </div>
  <button className="btn">Hover me</button>
</div> */}