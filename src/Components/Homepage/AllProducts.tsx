import { IProduct } from '@/types/product';
import ProductCard from '../ProductCard';

const AllProducts = ({ products }: { products: IProduct[] }) => {



    return (
        <section>
            <div className="mx-auto w-225 mt-6">
                <h2 className='text-2xl bold'> সব পণ্য</h2>
                <small>মোট ৩৩টি পণ্য দেখানো হচ্ছে</small>
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