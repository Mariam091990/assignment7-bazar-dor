
"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { IProduct } from "@/types/product";
import SortDropdown from "@/Components/Homepage/SortDropDown";
import ProductCard from "@/Components/ProductCard";

export default function ProductsPage() {
    const searchParams = useSearchParams();
    const category = searchParams.get("category") ?? "";
    const missingCategory = !category;

    const [products, setProducts] = useState<IProduct[]>([]);
    const [categoryName, setCategoryName] = useState("");
    const [sortBy, setSortBy] = useState("default");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        async function loadProducts() {
            setLoading(true);
            setError("");
            setProducts([]);

            try {
                const [productsRes, categoryRes] = await Promise.all([
                    fetch(
                        `https://openapi.programming-hero.com/api/bazardor/products?category=${encodeURIComponent(category)}`,
                        { signal: controller.signal }
                    ),
                    fetch(
                        `https://openapi.programming-hero.com/api/bazardor/categories/${encodeURIComponent(category)}`,
                        { signal: controller.signal }
                    ),
                ]);

                if (!productsRes.ok || !categoryRes.ok) {
                    throw new Error("Failed to load category products");
                }

                const [productsData, categoryData] = await Promise.all([
                    productsRes.json(),
                    categoryRes.json(),
                ]);

                if (!Array.isArray(productsData)) {
                    throw new Error("Unexpected products API response");
                }

                setProducts(productsData);
                setCategoryName(categoryData.nameBn ?? "");
            } catch (err) {
                if (err instanceof Error && err.name === "AbortError") return;

                setError("পণ্য লোড করা যায়নি। আবার চেষ্টা করুন।");
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        }

        if (category) {
            loadProducts();
        }

        return () => controller.abort();
    }, [category]);

    const sortedProducts = useMemo(() => {
        const result = [...products];

        if (sortBy === "price-asc") {
            result.sort((a, b) => a.today - b.today);
        } else if (sortBy === "price-desc") {
            result.sort((a, b) => b.today - a.today);
        }

        return result;
    }, [products, sortBy]);

    return (
        <main className="min-h-screen bg-[#f2f7f2] px-4 py-6 sm:px-6">
            <div className="mx-auto max-w-7xl">
                <header className="mb-5 rounded-2xl border border-gray-200 bg-white p-6">
                    <h1 className="text-2xl font-bold text-gray-800">
                        {categoryName || category}
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        {products.length} টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </header>

                <div className="mb-5 flex justify-end rounded-2xl border border-gray-200 bg-white p-4">
                    <SortDropdown
                        sortBy={sortBy}
                        onSortChange={setSortBy}
                    />
                </div>

                {loading ? (
                    <p className="py-10 text-center text-gray-500">
                        পণ্য লোড হচ্ছে...
                    </p>
                ) : missingCategory ? (
                    <p>কোনো ক্যাটাগরি নির্বাচন করা হয়নি।</p>
                ) : error || products.length === 0 ? (
                    <div className="rounded-xl bg-white p-10 text-center">
                        <p className="text-gray-700">
                            {error || "কোনো পণ্য পাওয়া যায়নি।"}
                        </p>
                        <Link href="/" className="mt-4 inline-block text-green-700 underline">
                            হোম পেজে ফিরে যান
                        </Link>
                    </div>
                ) : (
                    <>
                        <p className="mb-4 text-sm text-gray-500">
                            মোট {sortedProducts.length} টি পণ্য দেখানো হচ্ছে
                        </p>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {sortedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </>
                )}
            </div>



        </main>
    );
}