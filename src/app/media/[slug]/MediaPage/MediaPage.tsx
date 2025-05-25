'use client';

import { MediaDetails } from "./MediaDetails";
import { Products } from "./Products";
import { IMediaPage } from "./types/IMediaPage.types";
import Image from "next/image";

export function MediaPage({mediaItem}: IMediaPage) {
    return (
    <div>
        <div>
            <Image 
            width={1920}
            height={1080}
            src={mediaItem.backdrop}
            alt={mediaItem.title}
            className="absolute top-0 left-0 w-full h-full object-cover -z-1"
            />
            <div className="relative z-1 p-5 flex items-end justify-between">
                <MediaDetails mediaItem={mediaItem}/>            
                <Products /> 
            </div>                                  
        </div>        
    </div>
    )
}