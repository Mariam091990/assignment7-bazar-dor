import Link from 'next/link';
import type { IProduct } from '@/types/product';

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
        ? "bg-red-50 text-red-600"
        : isDown
            ? "bg-green-50 text-green-600"
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
            href={`/products/${product.id}`}
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
export default ProductCard;