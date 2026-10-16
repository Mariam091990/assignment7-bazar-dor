
import { cacheLife } from "next/cache";
import Link from "next/link";

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
}

const formatPrice = (price: number) =>
    new Intl.NumberFormat("bn-BD").format(price);

const formatPercent = (pct: number) =>
    new Intl.NumberFormat("bn-BD", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }).format(pct);

const getUnit = (unit: string) => {
    const units: Record<string, string> = {
        kg: "প্রতি কেজি",
        liter: "প্রতি লিটার",
        litre: "প্রতি লিটার",
        piece: "প্রতি পিস",
        pcs: "প্রতি পিস",
        dozen: "প্রতি ডজন",
    };

    return units[unit.toLowerCase()] ?? `প্রতি ${unit}`;
};

function ChangeBadge({ product }: { product: IProduct }) {
    const direction = product.change.dir;
    const isUp = direction === "up";
    const isDown = direction === "down";

    const badgeClass = isUp
        ? "bg-green-50 text-green-600"
        : isDown
            ? "bg-red-50 text-red-500"
            : "bg-gray-100 text-gray-500";

    return (
        <span
            className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold ${badgeClass}`}
        >
            {isUp ? "▲" : isDown ? "▼" : "—"}{" "}
            {formatPercent(product.change.pct)}%
        </span>
    );
}

function ProductCard({ product }: { product: IProduct }) {
    return (
        <Link
            href={`/products/${product.slug}`}
            className="group flex min-w-0 flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 transition duration-200 hover:-translate-y-0.5 hover:border-green-200 hover:shadow-md"
        >
            <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-2xl">
                    {product.image}
                </div>

                <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-semibold text-gray-800 group-hover:text-green-700">
                        {product.nameBn}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                        {getUnit(product.unit)}
                    </p>
                </div>
            </div>

            <div className="mt-4 flex items-end justify-between gap-2">
                <div>
                    <p className="text-[11px] text-gray-500">আজকের দাম</p>

                    <p className="mt-1 text-sm font-bold text-gray-900">
                        {formatPrice(product.today)} টাকা
                    </p>
                </div>

                <ChangeBadge product={product} />
            </div>
        </Link>
    );
}

function ProductGroup({
    title,
    products,
}: {
    title: string;
    products: IProduct[];
}) {
     if (products.length === 0) return null;

    return (
        <section className="mb-8">
            <h2 className="mb-4 text-base font-bold text-gray-800">
                {title}
            </h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

const ProductSections = async () => {
    "use cache";

    cacheLife("hours");

    const response = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const products: IProduct[] = await response.json();
    console.log(products);
    
    const risers = products
        .filter((product) => product.change.dir === "up")
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);

    const fallers = products
        .filter((product) => product.change.dir === "down")
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);

    return (
        <div className="bg-[#f2f7f2] px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <ProductGroup
                    title="▲ আজ দাম বেড়েছে"
                    products={risers}
                />

                <ProductGroup
                    title="▼ আজ দাম কমেছে"
                    products={fallers}
                />

                <section>
                    <h2 className="text-base font-bold text-gray-800">
                        সব পণ্য
                    </h2>

                    <p className="mb-4 mt-1 text-xs text-gray-500">
                        নিত্যপ্রয়োজনীয় পণ্যের আজকের বাজারদর দেখুন
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProductSections;
