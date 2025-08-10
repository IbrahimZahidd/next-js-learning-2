'use client'
import { usePathname, useSearchParams } from "next/navigation";

export default function Cart() {
    const pathName = usePathname();
    const searchParams1 = useSearchParams().get('search'); //http://localhost:3000/cart?search=product1
    const searchParams2 = useSearchParams().get('randomvalue'); //http://localhost:3000/cart?search=product1&randomvalue=abcde
    console.log(searchParams1);
    console.log(searchParams2); 
    return(
        <div>
            <h1>This is the Cart's component</h1>
        </div>
    );
};
