import { IProduct } from '@/types/product';
import ProductCard from '../ProductCard';

const FallingPrice = ({ products }: { products: IProduct[] }) => {


    const fallingPrice = products
        .filter((product) => product.change.dir === "down")
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);


    return (
        <section>
            <div className="mx-auto w-225 mt-4">
                <h2>▲ আজ দাম বেড়েছে</h2>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 ">
                    {fallingPrice.map((product) => (
                        <div key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
    
};

export default FallingPrice;