
// import Link from "next/link";
// interface Category {
//     id: string;
//     slug: string;
//     nameBn: string;
//     icon: string;
// }

// const NavLinks = async () => {
//     const response = await fetch(
//         "https://openapi.programming-hero.com/api/bazardor/categories",
//         {
//             next: { revalidate: 3600 },
//         }
//     );

//     if (!response.ok) {
//         throw new Error("Failed to fetch categories");
//     }

//     const categories: Category[] = await response.json();

//     return (
//         <nav className="border-t border-gray-100 mt-4 w-full">
//             <div className="mx-auto flex max-w-5xl px-4 sm:px-6 lg:px-8">
//                 <div
//                     className="
//             flex items-center gap-2 overflow-x-auto
//             whitespace-nowrap py-2
//             sm:gap-3
//             lg:justify-center
//             [scrollbar-width:none]
//             [&::-webkit-scrollbar]:hidden
//           "
//                 >
//                     {/* Category links */}

//                     {categories.map((category) => (

//                         <Link
//                             key={category.id}
//                             href={`/products?category=${category.slug}`}


//                         className="inline-flex shrink-0 items-center gap-1.5
//                 rounded-md px-3 py-2
//                 text-sm text-gray-700
//                 transition-colors duration-200
//                 hover:bg-green-100 hover:text-green-700
//                 focus-visible:outline-none
//                 focus-visible:ring-2 focus-visible:ring-green-600"
//                         >
//                             <span aria-hidden="true">{category.icon}</span>
//                             <span>{category.nameBn}</span>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
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
        <nav className="mt-4 w-full border-t border-gray-100">
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
                <div
                    className="
            flex items-center gap-2 overflow-x-auto
            whitespace-nowrap py-2
            sm:gap-3
            lg:justify-center
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
                >
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/products?category=${category.slug}`}
                            className="
                inline-flex shrink-0 items-center gap-1.5
                rounded-md px-3 py-2
                text-sm text-gray-700
                transition-colors duration-200
                hover:bg-green-100 hover:text-green-700
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-green-600
              "
                        >
                            <span aria-hidden="true">{category.icon}</span>
                            <span>{category.nameBn}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavLinks;
