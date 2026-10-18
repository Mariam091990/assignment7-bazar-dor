import type { IProduct } from "@/types/product";
import ProductCard from "../ProductCard";

const RisingPrice = ({ products }: { products: IProduct[] }) => {
    console.log(products);

    const risingProducts = products
        .filter((product) => product.change.dir === "up")
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);

    return (
        // <section>
        //     <div className="mx-auto w-225 mt-4">
        //     <h2>▲ আজ দাম বেড়েছে</h2>

        //     <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 ">
        //         {risingProducts.map((product) => (
        //             <div key={product.id}>
        //                 <ProductCard product={product} />
        //             </div>
        //         ))}
        //     </div>
        //     </div>
        // </section>
        <section className="mt-4 w-full px-4 sm:px-6 lg:px-6">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="mb-3 text-lg font-semibold text-red-600 sm:text-xl p-2.5">
                    ▲ আজ দাম বেড়েছে
                </h2>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {risingProducts.map((product) => (
                        <div key={product.id} className="min-w-0">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RisingPrice;