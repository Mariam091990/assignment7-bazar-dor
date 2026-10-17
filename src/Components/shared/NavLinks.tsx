

// const NavLinks = async() => {

//     const response  = await fetch ("https://openapi.programming-hero.com/api/bazardor/categories",
//          {
//       next: { revalidate: 3600 },
//     }
//     )
//      if (!response.ok) {
//     throw new Error("Failed to fetch categories");
//   }
// const data= await response.json();
// console.log(data);
//     return (
//         <div>

//         </div>
//     );
// };

// export default NavLinks;

// interface Category {
//     id: string;
//     category: string;
// }

// const NavLinks = async () => {
//     const response = await fetch(
//         "https://openapi.programming-hero.com/api/bazardor/categories",
//         {
//             next: { revalidate: 3600 },
//         }
//     );

//     if (!response.ok) {
//         throw new Error(`Failed to fetch categories: ${response.status}`);
//     }

//     const result = await response.json();
// console.log(result);

//     return (
//         <nav>

//         </nav>
//     );
// };

// export default NavLinks;

import Link from "next/link";
interface Category {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const NavLinks = async () => {
    const response = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/categories",
        {
            next: { revalidate: 3600 },
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }

    const categories: Category[] = await response.json();

    return (
        <nav className="border-t border-gray-100">
            <div className="mx-auto flex max-w-225 items-center justify-center gap-5 overflow-x-auto px-4 py-2">
                {categories.map((category) => (
                
                <Link
                        key={category.id}
                        href={`/products?category=${category.slug}`}
                        className="flex shrink-0 items-center gap-1.5 rounded-md px-3 py-2 text-sm text-gray-700 transition hover:bg-green-100 hover:text-green-700"
                    >
                        <span>{category.icon}</span>
                        <span>{category.nameBn}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default NavLinks;
