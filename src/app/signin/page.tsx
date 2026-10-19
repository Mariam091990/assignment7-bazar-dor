
"use client";
import React from 'react';
import { authClient } from "../../lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-hot-toast";


const page = () => {
  
    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const user = Object.fromEntries(data.entries())as { email: string, password: string };              
        console.log(user);

        const { data: resdata, error } = await authClient.signIn.email({
            ...user,

        });
        if (error) {
            toast.error(error.message as string);
            console.log(error);

        } else {
            toast.success("সাইন-ইন সম্পন্ন হয়েছে");
            console.log(resdata);

            redirect("/");

        }
    }

const handleGoogleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data);
}

const handleGithubSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "github",
  });
  console.log(data);
}       


    return (
        <div className=" flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-3">সাইন ইন করুন</h1>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">



                    <label className="label">ই-মেইল</label>
                    <input
                        name="email"
                        type="email" className="input w-md" placeholder="Email" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input
                        name="password"
                        type="password" className="input w-md" placeholder="Password" />

                    <button type="submit" className="btn bg-primary hover:bg-green-700 text-white">সাইন-ইন করুন</button>
                </fieldset>
            </form>
            <small>-------------------------------------------------------</small>
            <div className=" flex  items-center mt-4">
                
            <button onClick={handleGoogleSignIn} className="btn bg-primary hover:bg-green-700 text-white">গুগল দ্বারা  সাইন-ইন করুন</button>

            <button onClick={handleGithubSignIn} className="btn bg-primary hover:bg-green-700 text-white">গিটহাব দ্বারা  সাইন-ইন করুন</button>
        </div>
<p className="mt-5">
    অ্যাকাউন্ট নেই?<link href="/signup"><button className="btn bg-primary hover:bg-green-700 text-white">সাইন আপ</button></link>  করুন
</p>

        </div>
    );
};

export default page;