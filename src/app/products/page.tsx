
import { Suspense } from "react";
import ProductsContent from "./ProductContent";

export default function ProductsPage() {
    return (
        <Suspense
            fallback={
                <main className="min-h-screen bg-[#f2f7f2] px-4 py-10">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-center text-gray-500">
                            পণ্য লোড হচ্ছে...
                        </p>
                    </div>
                </main>
            }
        >
            <ProductsContent />
        </Suspense>
    );
}
