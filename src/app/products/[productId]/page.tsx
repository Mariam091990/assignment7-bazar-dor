
import { Suspense } from "react";
import Link from "next/link";

interface IMarket {
    [key: string]: string | number | null | undefined;
}

interface IProduct {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    unit: string;
    change: {
        dir: "up" | "down" | "flat";
        pct: number;
    };
    markets: IMarket[];
}

interface PageProps {
    params: Promise<{ productId: string }>;
}



const bnNumber = (value: number) =>
    new Intl.NumberFormat("bn-BD").format(value);

function formatPrice(value: number) {
    return `${bnNumber(value)} টাকা`;
}

function changeText(product: IProduct) {
    const { dir, pct } = product.change;

    if (dir === "flat") return "— ০.০%";

    return `${dir === "up" ? "▲" : "▼"} ${bnNumber(pct)}%`;
}

async function ProductDetailContent({ params }: PageProps) {
    const { productId } = await params;

    const id = Number(productId);

    if (!Number.isInteger(id) || id <= 0) {
        return <p className="p-10 text-center">ভুল পণ্য আইডি।</p>;
    }

    const response = await fetch(`${"https://openapi.programming-hero.com/api/bazardor"}/products/${id}`,
        {
            next: { revalidate: 3600 },
        }
    );

    if (!response.ok) {
        return (
            <p className="p-10 text-center">
                পণ্যের তথ্য পাওয়া যায়নি।
            </p>
        );
    }

    const product: IProduct = await response.json();

    const unitNames: Record<string, string> = {
        kg: "প্রতি কেজি",
        liter: "প্রতি লিটার",

        piece: "প্রতি পিস",
        pcs: "প্রতি পিস",
        dozen: "প্রতি ডজন",
    };

    const changeColor =
        product.change.dir === "up"
            ? "text-red-600"
            : product.change.dir === "down"
                ? "text-green-600"
                : "text-gray-500";

    const minValues = product.markets
        .map((item) => item.min)
        .filter((value): value is number => typeof value === "number");

    const lowestPrice = Math.min(...minValues);


    const maxValues = product.markets
        .map((item) => item.max)
        .filter((value): value is number => typeof value === "number");
    const maxPrice = Math.min(...maxValues);




    const averagePrice = Math.round((lowestPrice + maxPrice) / 2);




    return (
        <main className="min-h-screen bg-[#f0f5f0] px-4 py-8 sm:px-6">
            <div className="mx-auto max-w-6xl">
                {/* Breadcrumb */}
                <nav className="mb-6 text-sm text-gray-500">
                    <Link href="/" className="hover:text-green-700">
                        হোম
                    </Link>
                    {" / "}
                    <Link
                        href={`/products?category=${product.category}`}
                        className="hover:text-green-700"
                    >
                        {product.categoryNameBn}
                    </Link>
                    {" / "}
                    <span className="text-gray-800">{product.nameBn}</span>
                </nav>

                {/* Product summary */}
                <section className="mb-5 flex justify-between gap-5 rounded-2xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:p-7">
                    <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-3xl">
                            {product.image}
                        </div>

                        <div>
                            <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
                                {product.nameBn}
                            </h1>
                            <p className="mt-1 text-sm text-gray-500">
                                {unitNames[product.unit] ??
                                    `  ${product.unit}`} ·{" "}
                                {product.categoryNameBn}
                            </p>
                            <p className="mt-1 text-sm text-gray-600">
                                সর্বশেষ বাজারদর ও মূল্য পরিবর্তন
                            </p>
                        </div>
                    </div>

                    <div className="min-w-32 rounded-xl bg-[#f0f5f0] p-4 text-center">
                        <p className="text-xs text-gray-500">আজকের দাম</p>
                        <p className="text-2xl font-bold text-gray-800">
                            {bnNumber(product.today)}
                        </p>
                        <p className="text-xs text-gray-500">
                            টাকা / {unitNames[product.unit]}
                        </p>
                        <p className={`mt-1 text-xs font-semibold ${changeColor}`}>
                            {changeText(product)}
                        </p>
                    </div>
                </section>

                {/* Price history */}
                <div className="mb-5 rounded-2xl border border-gray-200 bg-white p-5">
                    <h2 className="mb-4 font-semibold text-gray-800">
                        দামের সার-সংক্ষেপ
                    </h2>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">

                        <div>
                            <p className="text-xs font-bold text-gray-500">সর্বনিম্ন দাম</p>
                            <p className="mt-2 text-lg font-bold text-green-600">
                                {lowestPrice !== null
                                    ? `${formatPrice(lowestPrice)}`
                                    : "তথ্য নেই"}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                                সবচেয়ে কম দামের বাজার
                            </p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-bold">সর্বাধিক দাম</p>
                            <p className="mt-2 text-lg font-bold text-red-500">
                                {maxPrice !== null
                                    ? `${formatPrice(maxPrice)}`
                                    : "তথ্য নেই"}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                                সবচেয়ে বেশি দামের বাজার
                            </p>
                        </div>

                        <div className="">
                            <p className="text-xs text-gray-500 font-bold">গড় দাম</p>
                            <p className="mt-2 text-lg font-bold text-green-700">
                                {averagePrice !== null
                                    ? `${formatPrice(averagePrice)}`
                                    : "তথ্য নেই"}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                            {unitNames[product.unit]}-এর হিসাবে
                            </p>
                        </div>
                    </div>
                </div>






                {/* Market prices */}
                <section className="rounded-2xl border border-gray-200 bg-white p-5">
                    <h2 className="mb-4 font-semibold text-gray-800">
                        বাজার ভিত্তিক আজকের দাম
                    </h2>

                    {product.markets?.length ? (
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-150 border-collapse text-left text-sm">
                                <thead>
                                    <tr className="border-y border-gray-200 bg-gray-50 text-gray-600">
                                        <th className="p-3">বাজার</th>
                                        <th className="p-3">বিভাগ</th>
                                        <th className="p-3">সর্বনিম্ন দাম</th>
                                        <th className="p-3">সর্বাধিক দাম</th>
                                        <th className="p-3 text-right">গড়</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {

                                        product.markets.map((market, index) => {

                                            const marketName =
                                                market.market ??
                                                ` ${(index + 1)}`;


                                            const divisionName =
                                                market.division ??
                                                ` ${(index + 1)}`;

                                            const minPrice =
                                                market.min ??
                                                ` ${(index + 1)}`;

                                            const maxPrice =
                                                market.max ??
                                                ` ${(index + 1)}`;

                                            const averagePrice =
                                                (Number(minPrice) + Number(maxPrice)) / 2;



                                            return (
                                                <tr
                                                    key={index}
                                                    className="border-b border-gray-100 last:border-0"
                                                >
                                                    <td className="p-3 font-medium text-gray-700">
                                                        {String(marketName)}
                                                    </td>
                                                    <td className="p-3 font-medium text-gray-700">
                                                        {String(divisionName)}
                                                    </td>

                                                    <td className="p-3 font-medium   text-gray-700">
                                                        {bnNumber(Number(minPrice))}
                                                    </td>
                                                    <td className="p-3 font-medium  text-gray-700">
                                                        {bnNumber(Number(maxPrice))}
                                                    </td>

                                                    <td className="p-3 font-medium text-right text-gray-700">
                                                        {bnNumber(Number(averagePrice))}
                                                    </td>


                                                </tr>
                                            );
                                        })

                                    }
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="py-6 text-center text-sm text-gray-500">
                            এই পণ্যের বাজারভিত্তিক তথ্য পাওয়া যায়নি।
                        </p>
                    )}
                </section>
            </div >
        </main >
    );
}

export default function ProductDetailPage(props: PageProps) {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-[#f0f5f0] p-10 text-center text-gray-500">
                    পণ্যের তথ্য লোড হচ্ছে...
                </div>
            }
        >
            <ProductDetailContent params={props.params} />
        </Suspense>
    );
}
