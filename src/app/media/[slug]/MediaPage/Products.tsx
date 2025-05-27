import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function Products() {
    return (
        <div className="relative">                
            <div className="absolute left-2.5 bottom-10">
                <Image
                    width={180}
                    height={180}
                    src="/products/product.png"
                    alt="product"
                    className="bg-white rounded-lg z-3 relative"
                />
                <div className="absolute w-full h-full bg-white/90 rounded-lg -top-5 left-0.5 scale-90 z-2"/>
                <div className="absolute w-full h-full bg-white/80 rounded-lg -top-9.5 left-1 scale-80 z-1"/>
            </div>
            <div className="bg-black/50 px-4 py-2.5 rounded-lg h-28 w-[200px] flex items-end">
                <div className="flex justify-between items-center mt-2 w-full text-sm">
                    <button className="text-secondary font-semibold">
                        Shop now
                    </button>
                    <ChevronRight className="text-secondary" size={20}/>
                </div>
            </div>
        </div> 
    );
}