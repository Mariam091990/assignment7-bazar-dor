import { cacheLife } from "next/cache";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface IProduct {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    unit: string;
    change: {
        dir: "up" | "down" | "null";
        pct: number;
    };

}

const Marquee = async () => {
    "use cache";

    cacheLife("hours");

    const response = await fetch("https://openapi.programming-hero.com/api/bazardor/products")

    const data = await response.json();
    // console.log(data);

    return (
        <div>
           

                <div className="overflow-hidden border-t border-gray-200 bg-gray-50 p-1.5">


                    <MarqueeText
                        direction="right"
                        duration={20}
                    >

                        <div className=" flex w-max">



                            {data.map((item: IProduct) => (
                                <div
                                    key={item.id}
                                    className="flex shrink-0 items-center gap-1.5 border-r border-gray-200 px-5 py-2 text-xs"
                                >
                                    <span>{item.image}</span>

                                    <span className="text-gray-700">
                                        {item.nameBn}
                                    </span>

                                    <span className="font-medium text-gray-800">
                                        {item.today} টাকা/কেজি
                                    </span>

                                    <span
                                        className={
                                            item.change.dir === "up"
                                                ? "font-semibold text-red-500"
                                                : "font-semibold text-green-600"
                                        }
                                    >
                                        {item.change.dir ? "▲" : "▼"} {""}{item.change.pct}%
                                    </span>

                                </div>
                            ))}

                        </div>
                    </MarqueeText>
                </div>
            </div>
        
    );
};

export default Marquee;