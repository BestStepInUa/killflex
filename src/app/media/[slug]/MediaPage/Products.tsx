import Image from "next/image";
import { ChevronRight } from "lucide-react";
import * as m from "motion/react-m"

export function Products() {
    return (
        <m.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
        >                
            <div className="absolute left-2.5 bottom-10">
                <Image
                    width={180}
                    height={180}
                    src="/products/product.png"
                    alt="product"
                    className="bg-white rounded-lg z-3 relative"
                />
                <m.div
                    initial={{ top: 0 }}
                    animate={{ top: [-25, -20] }}
                    transition={{ 
                        duration: 0.5,
                        delay: 0.2,
                        type: 'spring',
                        stiffness: 100,
                        damping: 20
                    }}
                    className="absolute w-full h-full bg-white/90 rounded-lg left-0.5 scale-90 z-2"
                />
                <m.div 
                    initial={{ top: 0 }}
                    animate={{ top: [-45, -38] }}
                    transition={{ 
                        duration: 0.7,
                        delay: 0.2,
                        type: 'spring',
                        stiffness: 100,
                        damping: 20
                    }}
                    className="absolute w-full h-full bg-white/80 rounded-lg left-1 scale-80 z-1"
                />
            </div>
            <div className="bg-black/50 px-4 py-2.5 rounded-lg h-28 w-[200px] flex items-end">
                <div className="flex justify-between items-center mt-2 w-full text-sm">
                    <button className="text-secondary font-semibold">
                        Shop now
                    </button>
                    <ChevronRight className="text-secondary" size={20}/>
                </div>
            </div>
        </m.div> 
    );
}