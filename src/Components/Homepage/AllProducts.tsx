import { IProduct } from '@/types/product';
import ProductCard from '../ProductCard';

const AllProducts = ({ products }: { products: IProduct[] }) => {



    return (
        <section id="সব-পণ্য"  className="mt-4 w-full px-4 sm:px-6 lg:px-6">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className='mb-3 text-5xl font-semibold text-indigo-800 sm:text-xl p-2.5'> <span className="text-red-600">▲</span>
                    <span className="text-green-600">▼</span>
                    সব পণ্য</h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 ">
                    {
                        products.map((product) =>
                            <ProductCard key={product.id} product={product}></ProductCard>
                        )

                    }
                </div>
            </div>
        </section>
    );
};

export default AllProducts;


{/* <section>
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
</section> */}