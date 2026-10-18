
"use client";
import React from 'react';
import { authClient } from "../../lib/auth-client";
import { redirect } from "next/navigation";

const page = () => {
const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const user = Object.fromEntries(data.entries()) as { name: string, image: string, email: string, password: string };
    console.log(user);

    const { data: resdata, error } = await authClient.signIn.email({
        ...user,

    });
    if (error) {
        console.log(error);
    } else {
        console.log(resdata);
        redirect("/");

    }
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

                    <button type="submit" className="btn bg-primary hover:bg-secondary text-white">সাইন-ইন করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default page;