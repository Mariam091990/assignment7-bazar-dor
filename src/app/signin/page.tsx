import React from 'react';

const page = () => {
    return (
        <div className=" flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-3">সাইন ইন করুন</h1>
            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

               

                    <label className="label">ই-মেইল</label>
                    <input
                        name="email"
                        type="email" className="input w-md" placeholder="Email" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input
                        name="password"
                        type="password" className="input w-md" placeholder="Password" />

                    <button className="btn bg-primary hover:bg-secondary text-white">সাইন-ইন করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default page;