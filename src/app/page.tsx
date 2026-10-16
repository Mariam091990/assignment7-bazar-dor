import RisingPrice from "@/Components/Homepage/RisingPrice";
import Banner from "../Components/Homepage/Banner";
// import BazarLogs from "../Components/Homepage/BazarLogs";
import type { IProduct } from "@/types/product";
import Marquee from "@/Components/shared/Marquee";
import { cacheLife } from "next/cache";
import FallingPrice from "@/Components/Homepage/FallingPrice";
import AllProducts from "@/Components/Homepage/AllProducts";

export default async function Home() {
"use cache";

cacheLife("hours");

const res = await fetch ("https://openapi.programming-hero.com/api/bazardor/products")
const products: IProduct[]= await res.json();







  return (
    <div>
      <Marquee />
      <Banner />
      {/* <BazarLogs /> */}
      <RisingPrice  products ={products}/>
      <FallingPrice products={products}/>
      <AllProducts products= {products} />

    </div>
  );
}
