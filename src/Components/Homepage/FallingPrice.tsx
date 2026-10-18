import { IProduct } from '@/types/product';
import ProductCard from '../ProductCard';

const FallingPrice = ({ products }: { products: IProduct[] }) => {


    const fallingPrice = products
        .filter((product) => product.change.dir === "down")
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);


    return (
        <section className="mt-4 w-full px-4 sm:px-6 lg:px-6">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className='text-2xl bold text-green-700 p-2'> ▼ আজ দাম কমেছে</h2>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 ">
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