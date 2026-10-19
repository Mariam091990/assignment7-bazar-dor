import Image from "next/image";
import image from "../../../public/bazar-hero.png"
import BanglaDate from "../shared/BanglaDate";
export default function Banner() {
    return (
        <section className="mx-auto mt-4 max-w-225 px-4">
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 py-5 sm:px-8 sm:py-6">

                {/* Date Badge */}
                <div className="mb-2 inline-flex rounded-full bg-green-50 px-3 py-1">
                    <span className="text-[11px] font-medium text-green-700">
                       <BanglaDate />
                    </span>
                </div>

                {/* Content */}
                <div className="flex items-center justify-between gap-5">

                    {/* Left Content */}
                    <div className="max-w-142.5">

                        <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                            আজকের বাজারের দাম এক নজরে
                        </h1>

                        <p className="mt-3 max-w-130 text-xs leading-5 text-gray-500 sm:text-sm">
                            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                            বাজারভিত্তিক বিস্তৃত, গড়, সর্বনিম্ন-সর্বাধিক
                            দামের পরিবর্তন এক জায়গায়।
                        </p>

                        <button className="mt-5 rounded-md bg-green-600 px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-green-700">
                            সব দাম দেখুন
                        </button>
                    </div>

                    {/* Right Illustration */}
                    <div className="hidden shrink-0 sm:block">
                        <Image
                            src={image}
                            alt="বাজারের পণ্য"
                            loading="eager"
                            className="object-contain width =auto height= auto"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}