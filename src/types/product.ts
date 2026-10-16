
export interface IProduct {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    unit: string;
    change: {
        dir: "up" | "down" | "flat";
        pct: number;
    };
    markets: {
        [key: string]: unknown;
    }[];
}
