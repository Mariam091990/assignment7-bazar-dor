
import Link from "next/link";
import { Home, Search, ShoppingBasket } from "lucide-react"

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#f0f5f0] px-4 py-12">
            <div className="w-full max-w-lg text-center">
                {/* Illustration */}
                <div className="relative mx-auto mb-8 flex h-36 w-36 items-center justify-center rounded-full bg-[#dceade]">
                    <ShoppingBasket
                        size={64}
                        strokeWidth={1.5}
                        className="text-[#07883e]"
                    />
                    <span className="absolute -right-2 -top-2 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#f0f5f0] bg-white text-sm font-bold text-[#07883e]">
                        404
                    </span>
                </div>

                {/* Error message */}
                <p className="mb-3 text-sm font-semibold tracking-widest text-[#07883e]">
                    পৃষ্ঠা খুঁজে পাওয়া যায়নি
                </p>

                <h1 className="text-3xl font-bold leading-tight text-[#253129] sm:text-4xl">
                    ওহ! আপনি ভুল পথে চলে এসেছেন
                </h1>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#707970] sm:text-base">
                    দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি পাওয়া যায়নি।
                    পৃষ্ঠাটি সরানো হয়েছে, ঠিকানা পরিবর্তন হয়েছে অথবা
                    আপনি ভুল লিংকে প্রবেশ করেছেন।
                </p>

                {/* Navigation buttons */}
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#07883e] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#067334] focus:outline-none focus:ring-2 focus:ring-[#07883e] focus:ring-offset-2"
                    >
                        <Home size={18} />
                        হোম পেজে ফিরে যান
                    </Link>

                    <Link
                        href="/#সব-পণ্য"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#d5e1d5] bg-white px-6 py-3 text-sm font-semibold text-[#253129] transition hover:bg-[#e8f1e8] focus:outline-none focus:ring-2 focus:ring-[#07883e] focus:ring-offset-2"
                    >
                        <Search size={18} />
                        বাজার দর দেখুন
                    </Link>
                </div>

                {/* Footer */}
                <p className="mt-12 text-xs text-[#8a948b]">
                    বাজার দর — সঠিক দামে বাজার করুন
                </p>
            </div>
        </main>
    );
}
