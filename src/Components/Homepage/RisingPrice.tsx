import type { IProduct } from "@/types/product";
import ProductCard from "../ProductCard";

const RisingPrice = ({ products }: { products: IProduct[] }) => {
    console.log(products);

    const risingProducts = products
        .filter((product) => product.change.dir === "up")
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);

    return (
        <section>
            <div className="mx-auto w-225 mt-4">
            <h2>▲ আজ দাম বেড়েছে</h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 ">
                {risingProducts.map((product) => (
                    <div key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default RisingPrice;