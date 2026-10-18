"use client";
import { authClient } from "../../lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-hot-toast";

const SignUpPage = () => {

    const onSubmit =async (e:React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const user = Object.fromEntries(data.entries())as {name:string, image:string, email:string, password:string};
        console.log(user);

 const { data:resdata, error } = await authClient.signUp.email({
...user,

});


if (error) {
 console.log(error);
toast.error(error.message as string);
}
 else {
console.log(resdata);
toast.success("সাইন-আপ সম্পন্ন হয়েছে");
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
            <h1 className="text-4xl font-bold mb-5">সাইন আপ করুন</h1>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">নাম</label>
                    <input
                        name="name"
                        type="text"
                        className="input w-md" placeholder="Name" />

                    <label className="label">আপনার ছবি</label>
                    <input
                        name="image"
                        type="url"
                        className="input w-md" placeholder="Image" />

                    <label className="label">ই-মেইল</label>
                    <input
                        name="email"
                        type="email" className="input w-md" placeholder="Email" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input
                        name="password"
                        type="password" className="input w-md" placeholder="Password" />

                    <button
                        type="submit"
                        className="btn bg-primary hover:bg-green-700 text-white">সাইন আপ করুন</button>
                </fieldset>
            </form>
            
            <p> অথবা </p>
             <div className=" flex  items-center mt-4">
                
            <button onClick={handleGoogleSignIn} className="btn bg-primary hover:bg-green-700 text-white">গুগল দ্বারা  সাইন-ইন করুন</button>

            <button onClick={handleGithubSignIn} className="btn bg-primary hover:bg-green-700 text-white">গিটহাব দ্বারা  সাইন-ইন করুন</button>
        </div>
        <p className="mt-5">অ্যাকাউন্ট নেই?<span className="text-green-700 "> সাইন আপ করুন</span></p>
        </div>
    );
};

export default SignUpPage