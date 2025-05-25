import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function Products() {
    return (
        <div className="bg-black/50 p-2 rounded-lg">                
            <div className="relative">
                <div className="absolute w-full h-full bg-white -top-10 left-2 scale-80"/>
                <div className="absolute w-full h-full bg-white -top-7 left-2 scale-90"/>
                <Image
                    width={200}
                    height={200}
                    src="/products/product.png"
                    alt="product"
                    className="bg-white rounded-lg"
                />
            </div>
            <div className="flex justify-between items-center">
                <button className="text-secondary font-semibold">
                    Shop now
                </button>
                <ChevronRight className="text-secondary"/>
            </div>
        </div> 
    );
}